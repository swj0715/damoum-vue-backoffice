// import { useUserAuthInfo } from '@/entities/manager'
// import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

// export function pageCheckIsAuthenticated(to: RouteLocationNormalized) {
//   return to.meta.authenticationRequired
// }

// export function handlePageAuthenticated(
//   isAuthenticated: boolean,
//   isPasswordChanged: boolean,
//   to: RouteLocationNormalized,
//   next: NavigationGuardNext
// ) {
//   if (isAuthenticated) {
//     if (isPasswordChanged) {
//       to.fullPath === '/password/change' ? next('/') : next()
//     } else {
//       to.fullPath === '/password/change' ? next() : next('/password/change')
//     }
//   } else {
//     next('/auth/login'.concat('?redirect='.concat(to.fullPath)))
//   }
// }

// export function handleAccessControl(roles: string[], next: NavigationGuardNext) {
//   const userAuthInfo = useUserAuthInfo()
//   const role = userAuthInfo.getRoleInfo.authCode
//   roles.includes(role) ? next() : next('/')
// }

// export function handlePageAccessPasswordChange(next: NavigationGuardNext) {
//   const userAuthInfo = useUserAuthInfo()
//   userAuthInfo.isPasswordChanged ? next() : next('/password/change')
// }
