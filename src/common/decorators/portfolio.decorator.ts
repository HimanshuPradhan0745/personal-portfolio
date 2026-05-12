export function Portfolio(): MethodDecorator {
    return (
        target: Object,
        propertyKey: string | symbol,
        descriptor: PropertyDescriptor
    ) => {
        const originalMethod = descriptor.value;

        descriptor.value = async function (...args: any[]) {
            try {
                return await originalMethod.apply(this, args);
            } catch (error) {
                console.error(
                    `[Portfolio Decorator Error] ${String(propertyKey)}`,
                    error
                );
                throw error;
            }
        };
        return descriptor;
    };
}