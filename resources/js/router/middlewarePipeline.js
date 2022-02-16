function middlewarePipeline(context, middleware, index) {
    const nextMiddleware = middleware[index]
    if (!middleware) {
        return context.next
    }

    return  () => {
        const  nextPipeline = middlewarePipeline(
            context, middleware, index + 1
        )
        nextMiddleware({...context, next: nextPipeline})
     }
}


export default  middlewarePipeline
