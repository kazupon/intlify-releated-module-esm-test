import { isString } from '@intlify/shared'
import { createI18n } from 'vue-i18n'
import { createRouter } from 'vue-i18n-routing'

console.log(isString('this is esm tests'), createI18n, createRouter)