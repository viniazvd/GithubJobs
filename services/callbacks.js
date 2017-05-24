let callbacks = {}

callbacks.getUser = ( err, res ) => {
    const data = res.data
    const allowedFields = ['name', 'location', 'email', 'hireable']
    const isAllowedField = ( field ) => allowedFields.includes( field )
    const toFinalObject = ( data ) => ( obj, field ) => Object.assign( {}, obj, { [field]: data[field] } )
    const result = Object.keys( data )
                                    .filter( isAllowedField )
                                    .reduce( toFinalObject( data ), {} )
    console.log( result )
}

callbacks.getReference = ( err, res ) => {
    const data = res.data
    const allowedFields = ['ref', 'url']
    const isAllowedField = ( field ) => allowedFields.includes( field )
    const toFinalObject = ( data ) => ( obj, field ) => Object.assign( {}, obj, { [field]: data[field] } )
    const result = Object.keys( data )
                                    .filter( isAllowedField )
                                    .reduce( toFinalObject( data ), {} )
    console.log( result )
}

callbacks.getContent = ( err, res ) => {
    const dados = res.data
    const data = dados.map( x => x.name )

    console.log( data )
}

callbacks.getAll =  ( err, res ) => {
    const dados = res.data
    const data = dados.map( x => x.name )

    console.log( data )
}

callbacks.getFollowers =  ( err, res ) => {
    const dados = res.data
    const data = dados.map( x => x )

    console.log( data )
}

callbacks.getFollowing =  ( err, res ) => {
    const dados = res.data
    const data = dados.map( x => x.login )

    console.log( data )
}

module.exports = callbacks