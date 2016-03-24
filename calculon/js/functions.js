
$funcao = $('#funcao');
$precisao = $('#precisao');
$resolver = $('#resolver');
$resultado = $('#exibirResultados');

function funcaoNoPonto(func,x){

        fun = func.replace("x",x);

        if(math.eval(fun)){
            return math.eval(fun);
        }else
                alert("A função "+fun+" possui caracteres invalidos");
}

function pontoMedio(a,b){
    return (a+b)/2;
}


function dif(x,y){
   if(x-y<0)
    return y-x;
   else
    return x-y;
}

function parseFunction(func,ret){
    aux = [];
    result = func.split(',',3);
    aux['func'] = result[0];
    aux['interval'] = result[1]+','+result[2];
    console.log(aux);
    return aux[ret];
}
    a = [];
    b = [];
function defineInterval(interval){

   interval = interval.split(',');
    a['state'] = interval[0][1]==='('? 'closed': 'open';
    value =  interval[0].replace('(','').replace('[','');
    //console.log(value);
    a['val'] =value[1];
    b['state'] = interval[1][interval[1].length-1]==')'? 'closed': 'open';
    value =  interval[1].replace(')','').replace(']','');
    b['val'] =value[0];
    //console.log(a);
    //console.log(b);
}


$resolver.click(function(event) {
    funcao = $.trim($('#funcao').val().replace(/\s+/g, ' '));

    precisao = $('#precisao').val();
    cleanFunction = parseFunction(funcao,'func');
    defineInterval(parseFunction(funcao,'interval'));

    if(precisao.search(',')!=-1){
        alert("nao pode conter virgula");
        return;
    }

    precisao = parseFloat(precisao);
    a.val = parseFloat(a.val);
    b.val = parseFloat(b.val);

        //Bisseção
        for (var k = 0; dif(a.val,b.val) > precisao ; k++) {
                //console.log(k+" a["+k+"] | b["+k+"] |  x["+k+"] |  f[x"+k+"] |  b["+k+"] -  a["+k+"] ");
                $resultado.append('<tr><td>'+k +'</td><td>'+a.val+'</td><td>'+b.val+'</td><td>'+pontoMedio(a.val,b.val)+'</td><td>'+ funcaoNoPonto(cleanFunction,pontoMedio(a.val,b.val))+'</td><td>'+dif(a.val,b.val)+'</td></tr>');

                if((funcaoNoPonto(cleanFunction,a.val)*funcaoNoPonto(cleanFunction,pontoMedio(a.val,b.val)))< 0)
                    b.val= pontoMedio(a.val,b.val);
                else if((funcaoNoPonto(cleanFunction,b.val)*funcaoNoPonto(cleanFunction,pontoMedio(a.val,b.val)))< 0)
                    a.val= pontoMedio(a.val,b.val);
                else if(funcaoNoPonto(cleanFunction,pontoMedio(a.val,b.val)) == 0)
                    console.log("é raiz");
        };
});




