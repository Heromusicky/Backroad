import feature from "../../data"



const Tours = () => {
  return (
    <div> <section className="section" id="tours">
    <div className="section-title">
      <h2>
        featured <span>tours</span>
      </h2>
    </div>

    <div className="section-center featured-center">
    {feature.map((items) =>{
            const {id,
              src,
             date,
             heading,
              article,
             country,
             days,
             cost,
             }=items

            return(
              <article className="tour-card" key={id}>
              <div className="tour-img-container">
      
                
                <img src={src} className="tour-img" alt="" />
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{heading}</h4>
                </div>
                <p>
                  {article}
                </p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>
                    {country}
                  </p>
                  <p>{days}</p>
                  <p>{cost}</p>
                </div>
              </div>
            </article>
            )
          })}
      

      



      
    </div>
  </section>
</div>
  )
}

export default Tours