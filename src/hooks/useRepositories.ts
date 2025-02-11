// useRepositories.ts (hook customizado)
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Repository } from '../types';

const CACHE_EXPIRATION_TIME = 3600000; // 1 hora

const useRepositories = () => {
  const [repositoriesInfo, setRepositoriesInfo] = useState<Repository[]>([]);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      const cachedData = localStorage.getItem('repositoriesInfo');
      const cachedTimestamp = localStorage.getItem('repositoriesInfoTimestamp');

      if (cachedData && cachedTimestamp) {
        const now = new Date().getTime();
        const isCacheValid = now - Number(cachedTimestamp) < CACHE_EXPIRATION_TIME;

        if (isCacheValid) {
          setRepositoriesInfo(JSON.parse(cachedData));
          return;
        }
      }

      try {
        const response = await axios.get<Repository[]>(`https://api.github.com/users/oelmojr/repos`);
        const repositories = response.data.filter((repo) => repo.topics.includes('portfolio'));

        const updatedRepositories = await Promise.all(
          repositories.map(async (repository) => {
            try {
              const readmeResponse = await axios.get(
                `https://api.github.com/repos/oElmoJr/${repository.name}/contents/README.md`
              );
              const readmeContent = readmeResponse.data.content;
              const decodedReadme = atob(readmeContent);

              const imageUrls = Array.from(
                decodedReadme.matchAll(/<img[^>]*src=["']([^"']+)["'][^>]*>/g),
                match => match[1]
              );

              return {
                ...repository,
                readme: decodedReadme,
                images: imageUrls,
              };
            } catch (err) {
              console.error(`Erro ao carregar o README para o repositório ${repository.name}`);
              return {
                ...repository,
                readme: "README não encontrado.",
                images: [],
              };
            }
          })
        );

        localStorage.setItem('repositoriesInfo', JSON.stringify(updatedRepositories));
        localStorage.setItem('repositoriesInfoTimestamp', new Date().getTime().toString());
        setRepositoriesInfo(updatedRepositories);
      } catch (err) {
        setError(true);
      }
    };

    fetchData();
  }, []);

  return { repositoriesInfo, error };
};

export default useRepositories;