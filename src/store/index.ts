import { createStore } from "vuex";
const modulesFiles = import.meta.globEager('./module/*.ts')

const pathList: string[] = []
for (const key in modulesFiles) {
	pathList.push(key)
}
const modules = pathList.reduce((modules: any, modulePath: string) => {
  const moduleName = modulePath.replace(/^\.\/modules\/(.*)\.\w+$/, '$1')
  const value = modulesFiles[modulePath]
  modules[moduleName] = value.default
  return modules
}, {})
const store = createStore<any>({
	modules
})

export default store
