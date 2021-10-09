import { PublicInstanceProxyHandler } from "./componentPublicInstance"

export function createComponentInstance(vnode) {

  const component = {
    vnode,
    type: vnode.type,
    instance: {}
  }

  return component

}

export function setupComponent(instance) {
  // TODO
  // initProps
  // initSlots

  // 初始化一个有状态的component
  setupStatefulComponent(instance)
}

function setupStatefulComponent(instance: any) {
  const Component = instance.type

  instance.proxy = new Proxy({ _: instance }, PublicInstanceProxyHandler)

  const { setup } = Component
  if (setup) {
    // return function / Object
    const setupResult = setup()

    handleSetupResult(instance, setupResult)
  }
}

function handleSetupResult(instance, setupResult: any) {
  // function  object
  // TODO
  // function

  if (typeof setupResult === 'object') {
    instance.setupState = setupResult
  }

  finishComponentSetup(instance)
}

function finishComponentSetup(instance: any) {
  const Component = instance.type

  if (Component.render) {
    instance.render = Component.render
  }
}

