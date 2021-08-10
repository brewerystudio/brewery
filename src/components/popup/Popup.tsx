import React, { useCallback, useEffect, useState, useRef } from 'react'
import ReactPopup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'
import { useWindowSize } from 'use-hooks'
import { colors, isBrowser, shouts, transparent } from '../../constants'
import { DeviceUtil, Shout } from '../../utils'
import styles from './Popup.module.sass'

export const POPUP_OVERLAY_COLOR = transparent(colors.white, 0.6)

export type PopupToggleFunc = (toggle: boolean) => void

export interface PopupProps {
	children?: any
	open?: boolean
	autoclose?: boolean
	toggleRef?: (toggler: PopupToggleFunc) => void
	onOpen?: () => void
	onClose?: () => void
	width?: string | number
	className?: string
	containerClassName?: string
}

export const Popup = (props: PopupProps) => {
	const { width: windowWidth } = useWindowSize()
	const { autoclose = false, width = DeviceUtil.isS(windowWidth) ? '90vw' : '60vw' } = props
	const [open, setOpen] = useState(props.open !== undefined ? props.open : false)
	const { className = '', containerClassName = '' } = props

	useEffect(() => {
		if (props.toggleRef) {
			props.toggleRef((toggle: boolean = true) => {
				setOpen(toggle)
				Shout.publish(shouts.POPUP_SCROLL_TOGGLE, { disable: toggle })
			})
		}
		return () => {
			Shout.publish(shouts.POPUP_SCROLL_TOGGLE, { disable: false })
		}
	}, [open, props])

	const onOpen = useCallback(() => {
		!open && setOpen(true)
		Shout.publish(shouts.POPUP_SCROLL_TOGGLE, { disable: true })
		props.onOpen && props.onOpen()
	}, [open, props])

	const onClose = useCallback(() => {
		open && setOpen(false)
		Shout.publish(shouts.POPUP_SCROLL_TOGGLE, { disable: false })
		props.onClose && props.onClose()
	}, [open, props])

	const onClickOutside = useCallback(() => {
		if (autoclose) {
			setOpen(false)
		}
	}, [autoclose])
	const onClickOutsideRef = useRef(null)
    useOnClickOutside(onClickOutsideRef, onClickOutside)

	return (
		<ReactPopup
			position={'center center'}
			open={open}
			closeOnEscape={autoclose}
			closeOnDocumentClick={false}
			onOpen={onOpen}
			onClose={onClose}
			overlayStyle={{ transition: '0.3s ease', background: POPUP_OVERLAY_COLOR }}
			contentStyle={{
				border: 'none',
				background: 'none',
				transition: '0.3s ease',
			}}
			className={containerClassName}
			children={<div ref={onClickOutsideRef} style={{ width }} className={`${styles.popup} btn-box shadow-l ${className}`}>{props.children}</div>}
		/>
	)
}

const useOnClickOutside = (ref: any, onClickOutside: (event: any)=>void) => {
    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (ref.current && !ref.current.contains(event.target)) {
                onClickOutside(event)
            }
        }
        isBrowser && document.addEventListener('mousedown', handleClickOutside)
        return () => { isBrowser && document.removeEventListener('mousedown', handleClickOutside) }
    }, [ref, onClickOutside])
}
