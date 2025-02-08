const useAccessCheck = (access: string): boolean | false => {

    const permissions: string[] = [];

    if (typeof window !== 'undefined') {
        const storedDashboards = JSON.parse(localStorage.getItem("permissions") ?? "[]")
        storedDashboards.forEach((item: string) => permissions.push(item));
    }


    return permissions.some((permission) => {
        return permission === access
    });
};

export default useAccessCheck;
