({
  showToast: function(component, event, helpers) {
    var params = event.getParam('arguments')[0]
    var toasts = component.get('v.toasts')
    var DURATION = 3000 // ms

    params.id = helpers.generateId()

    toasts.unshift(params)
    if(params.mode !== 'sticky') {
      // btw 'dismissable' is default
      setTimeout(function(){
        helpers.removeToast(component, params.id)
      }, DURATION)
    }
    component.set('v.toasts', toasts)
  },

  removeToast: function(component, event, helpers) {
    var id = event.getParams('id')
    helpers.removeToast(component, id)
  }
})
