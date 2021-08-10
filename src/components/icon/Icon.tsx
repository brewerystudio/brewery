import React, { useMemo, forwardRef } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Image } from '../image'
import { ReactSVG } from "react-svg"

interface IconProps {
    name: string,
    fill?: string,
    width?: string | number,
    height?: string | number,
    className?: string,
    viewBox?: string,
    onClick?: ()=>void
}

export const Icon = forwardRef((props: IconProps, ref: any) => {
    const data = useStaticQuery(graphql`
        query {
            images: allFile(filter: { internal: { mediaType: { regex: "/image/" } } })
            {
                edges {
                    node {
                        relativePath
                        extension
                        publicURL
                        childImageSharp {
                            fluid(maxWidth: 600) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
    `)

    const src = `assets/${props.name}`

    const match = useMemo(() => data.images.edges.find(({ node }: any) => src === node.relativePath),
        [data, src]
    )

    if (!match) {
        return null
    }

    if (match.node.extension !== "svg") {
        return <Image src={match.node.publicURL} />
    }

    return (
        <ReactSVG
            src={match.node.publicURL}
            afterInjection={(error: any) => {
                if (error) {
                    console.error(error)
                    return
                }
            }}
            beforeInjection={(svg: any) => {
                svg.classList.add(props.className)
                svg.setAttribute('fill', props.fill)
                svg.setAttribute('width', props.width)
                svg.setAttribute('height', props.height)
            }}
            evalScripts="always"
            fallback={() => <span>Error!</span>}
            loading={() => <span>Loading</span>}
            renumerateIRIElements={false}
            wrapper="span"
            className="wrapper-class-name"
            onClick={props.onClick}
        />
    )
})