import React, { useMemo, CSSProperties, forwardRef } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Styles } from "../../utils"

interface ImageProps {
    src?: string
    alt?: string
    className?: string
    style?: CSSProperties
}

export const Image = forwardRef((props: ImageProps, ref: any) => {
    const { src, ...rest } = props
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
    `);

    const match = useMemo(() => data.images.edges.find(({ node }: any) => src === node.relativePath),
        [data, src]
    )

    if (!match) {
        return null
    }

    if (match.node.extension === "svg" || !match.node.hildImageSharp) {
        return <img src={match.node.publicURL} style={props.style} className={Styles.classNames(props.className as any)} ref={ref} />
    }

    return <Img {...rest} fluid={match.node.childImageSharp.fluid} ref={ref} />;
})
