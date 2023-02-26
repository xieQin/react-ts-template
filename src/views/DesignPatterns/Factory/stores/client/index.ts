import { Creator } from "../interface";

export type UseCreateFactoryClient = (factory: Creator) => {
  creator: Creator;
};

export const useCreateFactoryClient: UseCreateFactoryClient = (
  creator: Creator
) => {
  return {
    creator,
  };
};
