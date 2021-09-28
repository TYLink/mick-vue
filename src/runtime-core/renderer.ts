import { createComponentInstance, setupComponent } from "./component"

export function render(vnode, container) {
  // patch


  patch(vnode, container)
}

function patch(vnode, container) {


  // 处理组件
  // 判断是不是一个element类型
  processComponent(vnode, container)
}

function processComponent(vnode, container) {
  mountComponent(vnode, container)
}

function mountComponent(vnode: any, container: any) {
  const instance = createComponentInstance(vnode)

  setupComponent(instance)

  setupRenderEffect(instance, container)
}

function setupRenderEffect(instance: any, container: any) {
  const subTree = instance.render()

  // vnode -> patch
  // vnode -> element -> mountElement

  patch(subTree, container)
}
