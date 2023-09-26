 let curr_comm = document.querySelector('#currentCommunity');
 let list_int = document.getElementsByName('intent');
 let curr_int = document.querySelector('#currentIntent');
 let listPostTypes = document.querySelectorAll('.typeTitle');

 function df1(inp)
{
    curr_comm.querySelector('.cname').innerText = inp.querySelector('.cname').innerText;
    curr_comm.querySelector('.sub_photo').src = inp.querySelector('.sub_photo').src;
}

function getSelectedIntent()
{
    let i=0;

    while(!list_int[i].checked)
    {
        i++;
    }
    curr_int.innerText = list_int[i].value;

}

function crt_post(a)
{
    listPostTypes[0].classList.remove('bor_cur_post_type');
    listPostTypes[1].classList.remove('bor_cur_post_type');
    listPostTypes[2].classList.remove('bor_cur_post_type');
    console.log(a);
    listPostTypes[a].classList.add('bor_cur_post_type');
    //console.log(listPostTypes[a].classList);

    if(a==0)
    {
        //console.log($('#ta2').attr("placeholder"));

     $('#ta2').attr("placeholder",'Text');

     $('#ta2').attr("rows",5);
     $('#postFile').css('display','none');
    }
    else if(a==1)
    {
       // console.log($('#ta2').attr("placeholder"));

        $('#ta2').attr("placeholder",'Text');
        $('#ta2').attr("rows",5);
        console.log($('#postFile').css('display'));
        $('#postFile').css('display','flex');

    }
    else{
        $('#ta2').attr("placeholder",'URLText');
        $('#ta2').attr("rows",2);
        $('#postFile').css('display','none');
    }

}


