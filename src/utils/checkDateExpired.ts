export const checkDateExpired = (taskDate: Date): boolean => {
    return new Date().getTime() > taskDate.getTime()
}