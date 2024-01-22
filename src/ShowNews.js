import React from 'react'
import "./App.css"

function ShowNews({ news }) {
    // console.log(news)
    return (
        <>
            
            <div className="row my-3 p-4">
                {news.map((value, index) => {
                    return (


                        <div className="card mx-3 my-3 p-4" style={{ width: "18rem" }}>
                            <img src={value.urlToImage} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{value.title}</h5>
                                <p className="card-text">{value.description}</p>
                                <a href={value.url} className="btn btn-primary">Read More</a>
                            </div>
                        </div>


                    )
                })}

            </div>

        </>
    )
}

export default ShowNews