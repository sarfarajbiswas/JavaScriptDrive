const normal_count_el = document.querySelector('.normal_count');
    const thottling_count_el = document.querySelector('.thottling_count');

    let normal_count = 0;
    let thottling_count = 0;
    let isScrolling = true;

    const normalCount = () => {
        normal_count ++;
        normal_count_el.innerHTML = `Normal Count: ${normal_count}`;
    }

    const thottlingCount = () => {
        if(isScrolling === true){
            thottling_count ++;
            thottling_count_el.innerHTML = `Throttling Count: ${thottling_count} `;
            isScrolling = false;
            setTimeout(() =>{
                isScrolling = true;
            }, 1000);
        }
    }


    const showCount = () => {
        console.log('showCount : ${normal_count_el}');
        console.log(thottling_count);

        normalCount();
        thottlingCount();
    }