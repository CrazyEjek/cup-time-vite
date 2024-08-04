export const Order = () => (
    <section className="order">
        <div className="container">
            <h2 className="order__title">Доставка</h2>

            <form action="" className="order__form">
                <input 
                type="text" 
                className="order__input" 
                name="name" 
                placeholder="Имя" />

                <input 
                type="text" 
                className="order__input" 
                name="phone" 
                placeholder="Телефон" />

                <input 
                type="text" 
                className="order__input order__input_address" 
                name="address" 
                placeholder="Адрес" />

                <fieldset className="order__payment">
                <legend className="order__payment-title">Оплата:</legend>
      
                  <label 
                  className="order__payment-label">
                    <input 
                    className="order__radio" 
                    type="radio" 
                    name="payment" 
                    value="cash" 
                    defaultChecked/>
                    Наличными
                  </label>
      
                  <label className="order__payment-label">
                    <input 
                    className="order__radio" 
                    type="radio" 
                    name="payment" 
                    value="credit card"/>
                    Картой
                  </label>
                
              </fieldset>

            </form>
        </div>
        
    </section>
);