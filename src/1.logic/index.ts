/*
    Function merges two objects and performs a callback when it is done..       
*/
export function merge<T extends {}, U extends {}>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}
