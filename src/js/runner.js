function runner(_gen){
    return new Promise((resolve, reject)=>{
      var gen=_gen();
      _next();
      function _next(_last_res){
        var res=gen.next(_last_res);
  
        if(!res.done){
          var obj=res.value;
  
          if(obj instanceof Promise){
            obj.then((res)=>{
              _next(res);
            }, (err)=>{
              reject(err);
            });
          }else if(typeof obj=='function'){
            if(obj.constructor.toString().startsWith('function GeneratorFunction()')){
              runner(obj).then(res=>_next(res), reject);
            }else{
              _next(obj());
            }
          }else{
            _next(obj);
          }
        }else{
          resolve(res.value);
        }
      }
    });
  };