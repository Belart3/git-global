// for final form
{
    selectedMethod === 'I would like to request a call' 
    ?   
    <div onClick={showMessage}>
        <BtnNext title="submit"  disabled={!selectedMethod} />
    </div>
    : selectedMethod === 'I would like to schedule a consultation' 
    ? 
    <div  onClick={consultation}>
        <BtnNext title="schedule now"  disabled={!selectedMethod} type="submit"/>
    </div> 
    : 
    <BtnNext title="next"  disabled={!selectedMethod} /> 
}  