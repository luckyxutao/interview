Function.prototype.call2 = function(context,...args){
    let fn = this;
    context['fnfn'] = fn;
    context['fnfn'](...args);
    delete context['fnfn'];
    
}