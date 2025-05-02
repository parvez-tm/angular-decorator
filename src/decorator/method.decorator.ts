export function LogMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor): void {
    const originalMethod = descriptor.value;
  
    descriptor.value = function(...args: any[]) {
      console.log(`Method ${propertyKey} called with arguments:`, args);
      const result = originalMethod.apply(this, args);
      console.log(`Method ${propertyKey} returned:`, result);
      return result;
    };
  }