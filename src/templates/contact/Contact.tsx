import React, { useEffect, useState } from 'react'
import { Page } from '../Page'
import { Button, Icon, IconName, Popup, PopupToggleFunc } from '../../components'
import './Contact.sass'
import { colors } from '../../constants'
import { Styles } from '../../utils'

export class Contact extends Page {

    componentDidMount = () => {
    }

    public renderDesktop = () => {
        return (
            <>
                <div className={'wrapper d-flex flex-column justify-content-between pl-4 pr-4 mt-4 mb-4'}>
                    <div className={'row row-eq-height'}>
                        <div className={'col-6 p-2 inactive d-flex flex-column'}>
                            <ContactUsPopup className={'btn-box inactive mb-2'} />
                            <div className={'btn-box mb-2 inactive'}>
                                <div className={'d-flex flex-row justify-content-stretch pl-3 pr-3 pt-1 pb-1'}>
                                    <div className={'text-left d-flex flex-row align-items-center justify-content-between w-100'}>
                                        <div className={'text-left color-light font-title upper h6 mb-0 mt-0'}>
                                            Booking & General Inquiries
                                        </div>
                                        <div className={'text-right color-white color-primary upper h6 mt-0 mb-0 w-65 lh-1.75'}>
                                            <a className={'color-primary'} href="tel:+18447172739">(844) 717-BREW(2739)</a><br/>
                                            <a className={'color-primary'} href="mailto:booking@breweryrecording.com">BOOKING@BREWERYRECORDING.COM</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={'btn-box mb-2 inactive'}>
                                <div className={'d-flex flex-row justify-content-stretch pl-3 pt-1 pb-1'}>
                                    <div className={'color-light bold font-primary upper h6 mt-0 mb-0 upper'}>
                                        © {new Date().getFullYear()} BREWERY RECORDING STUDIO
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'col-6 h-100 p-2'}>
                            <div className={'d-flex flex-column align-self-stretch'}>
                                <div className={'btn-box mb-2 inactive'}>
                                    <div className={'d-flex flex-row justify-content-stretch p-3'}>
                                        <div className={'pr-3'}>
                                            <Icon
                                                name={IconName.Microphone}
                                                width={'3em'}
                                                height={'3em'}
                                            />
                                        </div>
                                        <div className={'text-left'}>
                                            <div className={'color-white font-title upper h3 mt-0 mb-0'}>
                                                Virtual Mixing
                                            </div>
                                            <div className={'color-primary font-secondary upper h6 mt-0 mb-0'}>
                                                Get your tracks mixed without leaving home. Click below to get started.
                                            </div>
                                            <div className={"mt-3"}>
                                                <Button
                                                    className={'p-3 color-white font-title justify-content-center'}
                                                    text={'Start Mixing'}
                                                    textColor={colors.white}
                                                    backgroundColor={colors.primary}
                                                    fontSize={'.8em'}
                                                    onClick={()=>{}}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={'btn-box mb-2 inactive'}>
                                    <div className={'d-flex flex-row justify-content-stretch p-3'}>
                                        <div className={'pr-3'}>
                                            <Icon
                                                name={IconName.Record}
                                                width={'3em'}
                                                height={'3em'}
                                            />
                                        </div>
                                        <div className={'text-left'}>
                                            <div className={'color-white font-title upper h3 mt-0 mb-0'}>
                                                Beats
                                            </div>
                                            <div className={'color-primary font-secondary upper h6 mt-0 mb-0'}>
                                                Purchase beats from our award-winning producers.
                                            </div>
                                            <div className={"mt-3"}>
                                                <Button
                                                    className={'p-3 color-white font-title justify-content-center'}
                                                    text={'Explore Beats'}
                                                    textColor={colors.white}
                                                    backgroundColor={colors.primary}
                                                    fontSize={'.8em'}
                                                    onClick={()=>{}}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={'mb-2 d-flex flex-row'}>
                                    <div className={'btn-box mr-2 inactive'}>
                                        <div className={'d-flex flex-row justify-content-stretch p-3'}>
                                            <div className={'text-left'}>
                                                <div className={'color-white font-title upper h3 mt-0 mb-0'}>
                                                    Studio Tours
                                                </div>
                                                <div className={'color-primary font-secondary upper h6 mt-0 mb-0'}>
                                                    We'd love to show you around. Give us a call and set up an appointment.
                                                </div>
                                                <div className={"mt-3"}>
                                                    <Button
                                                        className={'p-3 color-white font-title justify-content-center'}
                                                        text={'Book Tour'}
                                                        textColor={colors.white}
                                                        backgroundColor={colors.primary}
                                                        fontSize={'.8em'}
                                                        onClick={()=>{}}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={'btn-box mr-2 inactive'}>
                                        <div className={'d-flex flex-row justify-content-stretch p-3'}>
                                            <div className={'text-left'}>
                                                <div className={'color-white font-title upper h3 mt-0 mb-0'}>
                                                    Internships
                                                </div>
                                                <div className={'color-primary font-secondary upper h6 mt-0 mb-0'}>
                                                    We offer unpaid internships for those that are willing to work hard.
                                                </div>
                                                <div className={"mt-3"}>
                                                    <Button
                                                        className={'p-3 color-white font-title justify-content-center'}
                                                        text={'Send My Resume'}
                                                        textColor={colors.white}
                                                        backgroundColor={colors.primary}
                                                        fontSize={'.8em'}
                                                        onClick={()=>{}}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    public renderMobile = () => {
        let contactUsPopup: PopupToggleFunc
        return (
            <>
                <div className={'wrapper w-100 h-100 p-4 d-flex flex-row align-items-center'}>
                    <div className={'d-flex flex-column mt-4'}>
                        <button className={'btn-box w-100 mb-2'}>
                            <div className={'d-flex flex-row justify-content-stretch p-3'}>
                                <div className={'pr-3'}>
                                    <Icon
                                        name={IconName.Microphone}
                                        width={'3em'}
                                        height={'3em'}
                                    />
                                </div>
                                <div className={'text-left'}>
                                    <div className={'color-white font-title upper h4 mt-0 mb-0'}>
                                        Virtual Mixing
                                    </div>
                                    <div className={'color-primary font-secondary upper h7 mt-0 mb-0'}>
                                        Get your tracks mixed without leaving home. Click below to get started.
                                    </div>
                                </div>
                            </div>
                        </button>
                        <button className={'btn-box mb-2'}>
                            <div className={'d-flex flex-row justify-content-stretch p-3'}>
                                <div className={'pr-3'}>
                                    <Icon
                                        name={IconName.Record}
                                        width={'3em'}
                                        height={'3em'}
                                    />
                                </div>
                                <div className={'text-left'}>
                                    <div className={'color-white font-title upper h4 mt-0 mb-0'}>
                                        Beats
                                    </div>
                                    <div className={'color-primary font-secondary upper h7 mt-0 mb-0'}>
                                        Purchase beats from our award-winning producers.
                                    </div>
                                </div>
                            </div>
                        </button>
                        <button className={'btn-box mb-2'}>
                            <div className={'d-flex flex-row justify-content-stretch p-3'}>
                                <div className={'text-left'}>
                                    <div className={'color-white font-title upper h4 mt-0 mb-0'}>
                                        Studio Tours
                                    </div>
                                    <div className={'color-primary font-secondary upper h7 mt-0 mb-0'}>
                                        We'd love to show you around. Give us a call and set up an appointment.
                                    </div>
                                </div>
                            </div>
                        </button>
                        <button className={'btn-box mb-2'}>
                            <div className={'d-flex flex-row justify-content-stretch p-3'}>
                                <div className={'text-left'}>
                                    <div className={'color-white font-title upper h4 mt-0 mb-0'}>
                                        Internships
                                    </div>
                                    <div className={'color-primary font-secondary upper h7 mt-0 mb-0'}>
                                        We offer unpaid internships for those that are willing to work hard.
                                    </div>
                                </div>
                            </div>
                        </button>
                        <div className={'btn-box mb-2 inactive d-flex flex-column align-items-center'}>
                            <div className={'d-flex flex-row justify-self-stretch flex-1'}>
                                <div className={'color-light bold font-primary upper h6 mt-0 mb-0 upper text-xs-center'}>
                                    © {new Date().getFullYear()} BREWERY RECORDING STUDIO
                                </div>
                            </div>
                            <Button
                                containerClassName={'mr-3 mt-3 mb-1 align-self-end'}
                                className={'p-3 color-white font-title'}
                                text={'Contact Us'}
                                textColor={colors.white}
                                backgroundColor={colors.primary}
                                fontSize={'.8em'}
                                onClick={() => contactUsPopup && contactUsPopup(true)}
                            />
                        </div>
                    </div>
                </div>
                <ContactUsPopup toggleRef={r => (contactUsPopup = r)} />
            </>
        )
    }

}

interface ContactUsPopupProps {
    toggleRef?: (toggler: PopupToggleFunc) => void
    className?: string
}

const ContactUsPopup = (props: ContactUsPopupProps) => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [isValid, setIsValid] = useState(false)

    useEffect(() => {
        setIsValid(fullName.length > 0 && email.length > 0 && message.length > 0)
    }, [fullName, email, message])

    const reset = () => {
        setFullName('')
        setEmail('')
        setMessage('')
        setIsValid(false)
    }

    let toggler: PopupToggleFunc
    const send = async () => {
        console.log(fullName, email, message)
        reset()
        toggler && toggler(false)
    }

    const popup = (
        <div className={Styles.classNames('flex-1 d-flex flex-column', props.className)}>
            <div className={'p-2'}>
                <div className={'color-white font-title upper h1 mt-0'}>
                    Contact Us
                </div>
                <div className={'color-primary font-secondary upper h5 mb-0'}>
                    Questions or concerns? We'll get back to you ASAP.
                </div>
            </div>
            <div className={'form mt-2 flex-1 d-flex flex-column'}>
                <div className="input-group p-2">
                    <div className="input-group-prepend">
                        <span className="input-group-text color-light font-title" style={{ width: 150 }} id="">Full Name</span>
                    </div>
                    <input type="name" value={fullName} className="form-control text-white" placeholder={'Iman Artiste'} onChange={v => setFullName(v.target.value)} />
                </div>
                <div className="input-group p-2">
                    <div className="input-group-prepend">
                        <span className="input-group-text color-light font-title" style={{ width: 150 }} id="">Email Address</span>
                    </div>
                    <input type="email" value={email} className="form-control text-white" placeholder={'ia@email.com'}  onChange={v => setEmail(v.target.value)} />
                </div>
                <div className="input-group p-2 flex-1">
                    <textarea value={message} className="form-control text-white flex-1" style={{ marginLeft: 150, resize: 'none' }} placeholder={'I wanted to ask about...'} onChange={v => setMessage(v.target.value)}></textarea>
                </div>
            </div>
            <div className={"p-2"}>
                <Button
                    containerClassName={'w-100'}
                    className={'p-3 color-white font-title justify-content-center'}
                    text={'Send Message'}
                    textColor={colors.white}
                    backgroundColor={colors.primary}
                    onClick={send}
                    disabled={!isValid}
                />
            </div>
        </div>
    )

    return props.toggleRef ? (
        <Popup
            open={false}
            toggleRef={r => {
                toggler = r
                props.toggleRef && props.toggleRef(r)
            }}
            onClose={reset}
            autoclose
        >
            {popup}
        </Popup>
    ) : popup
}
