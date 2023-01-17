const quantityLabel = {
	1: 'peu',
	2: 'modérément',
	3: 'beaucoup'
};

function CareScale({scaleValue,careType}){
    const range = [1, 2, 3];
    const scaleType = careType === "light" ? '☀️' : '💧';
    return (<div onClick={() => handleClick(scaleValue, careType)}>
        {range.map((elem)=> scaleValue >= elem ? <span key={elem.toString()}>{scaleType}</span> : null)}
    </div>);
}

const handleClick = (scale, care) => {
    alert(`Cette plante recquiert ${quantityLabel[scale]} ${care === "light" ? "de lumière" : "d'arrosage"}`);
};

export default CareScale;