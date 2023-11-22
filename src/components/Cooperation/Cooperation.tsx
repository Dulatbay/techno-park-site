import './Cooperation.css'

const FooterTop = () => {
    // todo: исправить
    return (
        <div className='footer-top'>
            <h1>Сотрудничество</h1>
            <p>Если вы хотите стать нашим партнером, инвестором или заказчиком, то просим вас заполнить данную форму.</p>
            <input placeholder='Почта'></input>
            <input placeholder='(999) 999 99 99'></input>
            <input placeholder='ФИО'></input>
            <button type='submit'>Отправить</button>
        </div>
    )
}

export default FooterTop;