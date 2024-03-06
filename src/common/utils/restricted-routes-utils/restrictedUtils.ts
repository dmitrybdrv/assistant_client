/*
Функция - в зависимости от перечисленных роутов в массиве restrictedRoutes, ограничивает доступ к станицам данных
роутингов. Возвращает boolean значение (false - если доступ к маршруту закрыт)
 */
export const isRestrictedRoute = (pathname: string): boolean => {
    // Ограниченые маршруты для пользователя
    const restrictedRoutes = ['/auth/sign-up', '/auth/reset-password'];

    return restrictedRoutes.includes(pathname);
};