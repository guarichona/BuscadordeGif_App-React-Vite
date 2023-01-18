
// 'imagesMarly' es lo que yo estoy definiendo como property; en este caso lo estoy desestructurando 'title' y 'url' a partir de la iteración

export const GifItem = ({ title, url, id }) => {

  // console.log({ title, url, id });

  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>


  )
}


