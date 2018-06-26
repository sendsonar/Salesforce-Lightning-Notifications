({
    removeToast: function(component, toastId) {
        var toasts = component.get('v.toasts')
        component.set('v.toasts', toasts.filter(function(toast){
            toast.id !== toastId
        }))
    },

    generateId: function(){
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1)
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4()
    }
})
