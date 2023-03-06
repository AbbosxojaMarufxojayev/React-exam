import React from 'react'
import "./Footer.css"
import { BsTelephone, BsEnvelope, BsInstagram, BsWifi } from "react-icons/bs"
import { GoLocation } from "react-icons/go"
import { FiFacebook } from "react-icons/fi"
import { FaTelegramPlane } from "react-icons/fa"
import { AiFillYoutube } from "react-icons/ai"

function Footer() {
  return (
        <div className="footer">
            <div className="footer__top">
                <h1>Asaxiy kompaniyasi haqida</h1>
                <p className="first__desc">
                Butun O‘zbekiston bo‘ylab maishiy texnika va elektronika tovarlarini yetkazib beruvchi kompaniyamizning asosiy afzalligi – ko‘p yillik ish tajribasi va yaxshi nom qozonib ulgurganidir. Asos solinganidan buyon Asaxiy internet-do‘koni va uning jamoasi iste’mol bozorining talablari tendensiyalarini tinimsiz kuzatib kelmoqda; bu esa bizga eng so‘nggi texnologiyalar va innovatsion yechimlardan hamisha boxabar bo‘lib turish imkonini beradi.
                </p>
                <p className="sec__desc">Kompaniiya mutaxassislari mijozlarimizning istaklarini diqqat bilan o‘rganishadi, shu bois resurs doimiy tarzda hamyonbop narxlardagi sifatli yangi mahsulotlar bilan boyitilib kelmoqda.</p>
                <div className="desc__divs">
                    <div className="first__desc__div"><p>Kompaniyaning ish tamoyili</p></div>
                    <div className="sec__desc__div"><p>Bizning afzalliklarimiz</p></div>
                </div>
                <p className='last__descs book'>"Asaxiy Books" MCHJ</p>
                <p className='last__descs'>Ro'yxatdan o'tish raqami: 646439</p>
                <p className='last__descs'>INN: 305829008</p>
                <p className='last__descs'>MCHJ rahbari: Allayev Feruz Abdunasimovich</p>
            </div>
            <div className="footer__middle">
                <div className="top__part__footer">
                    <div className="mini__blocks__footer"><img src="https://assets.asaxiy.uz/brand/webp//605036814c07e.webp" alt="" /></div>
                    <div className="mini__blocks__footer"><img src="https://assets.asaxiy.uz/brand/webp//6067393b94990.webp" alt="" /></div>
                    <div className="mini__blocks__footer"><img src="https://assets.asaxiy.uz/brand/webp//6013a8b3bc61c.webp" alt="" /></div>
                    <div className="mini__blocks__footer"><img src="https://assets.asaxiy.uz/brand//630b04bbdadf4.jpg" alt="" /></div>
                    <div className="mini__blocks__footer"><img src="https://assets.asaxiy.uz/brand//630b0f0ed1e2b.png" alt="" /></div>
                    <div className="mini__blocks__footer"><img src="https://assets.asaxiy.uz/brand//6309b524cec23.png" alt="" /></div>
                    <div className="mini__blocks__footer"><img src="https://assets.asaxiy.uz/brand/webp//5e15c4ec85cf2.webp" alt="" /></div>
                    <div className="mini__blocks__footer"><img src="https://assets.asaxiy.uz/brand/webp//5e15c5de44b63.webp" alt="" /></div>
                    <div className="mini__blocks__footer"><img src="https://assets.asaxiy.uz/brand/webp//5e15c615d99f8.webp" alt="" /></div>
                    <div className="mini__blocks__footer"><img src="https://assets.asaxiy.uz/brand//63b65df2b0896.png" alt="" /></div>
                    <div className="mini__blocks__footer"><img src="https://assets.asaxiy.uz/brand/webp//5e15c63e06b95.webp" alt="" /></div>
                    <div className="mini__blocks__footer"><img src="https://assets.asaxiy.uz/brand/webp//5e15c561deadb.webp" alt="" /></div>
                    <div className="mini__blocks__footer"><img src="https://assets.asaxiy.uz/brand/webp//6014ffc121fc1.webp" alt="" /></div>
                    <div className="mini__blocks__footer"><img src="https://assets.asaxiy.uz/brand/webp//6064cdf0ce901.webp" alt="" /></div>
                    <div className="mini__blocks__footer"><img src="https://assets.asaxiy.uz/brand/webp//5e15c4697e437.webp" alt="" /></div>
                    <div className="mini__blocks__footer"><img src="https://assets.asaxiy.uz/brand/webp//5e15c51449bd0.webp" alt="" /></div>
                    <div className="mini__blocks__footer"><img src="https://assets.asaxiy.uz/brand/webp//5ff6f8872a0db.webp" alt="" /></div>
                    <div className="mini__blocks__footer"><img src="https://assets.asaxiy.uz/brand/webp//6103c3977d54d.webp" alt="" /></div>
                    <div className="mini__blocks__footer"><img src="https://assets.asaxiy.uz/brand/webp//6014fbfea491a.webp" alt="" /></div>
                    <div className="mini__blocks__footer"><img src="https://assets.asaxiy.uz/brand/webp//603481675b122.webp" alt="" /></div>
                </div>
                <div className="bot__part__footer">
                    <div className="first__part__bot"></div>
                    <div className="sec__part__bot">
                        <img src="https://asaxiy.uz/custom-assets/images/logos/asaxiy-logo-white.svg" alt="" />
                        <p className='shop__int'>Sizning internet do'koningiz</p>
                        <div className="buttons__bot">
                            <button><img src="https://asaxiy.uz/custom-assets/images/app-store.svg" alt="" /></button>
                            <button><img src="https://asaxiy.uz/custom-assets/images/google-play.svg" alt="" /></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="services">
                    <div className="services__mini">
                        <div className="mini__part1"><img src="https://asaxiy.uz/custom-assets/images/icons/market.svg" alt="" /></div>
                        <div className="mini__part2">
                            <p className="title__mini__part">Endi bozorga borishga hojat yo'q</p>
                            <p className="desc__part__mini">Bizda qulay narxlar va uyga yetkazib berish mavjud</p>
                        </div>
                    </div>
                    <div className="services__mini">
                        <div className="mini__part1"><img src="https://asaxiy.uz/custom-assets/images/icons/fast-delivery.svg" alt="" /></div>
                        <div className="mini__part2">
                            <p className="title__mini__part">Tez yetkazib berish</p>
                            <p className="desc__part__mini">Bizning xizmatlarimiz sizni ajablantiradi</p>
                        </div>
                    </div>
                    <div className="services__mini">
                        <div className="mini__part1"><img src="https://asaxiy.uz/custom-assets/images/icons/return.svg" alt="" /></div>
                        <div className="mini__part2">
                            <p className="title__mini__part">Siz uchun qulayliklar</p>
                            <p className="desc__part__mini">Nosozlik yuzaga kelganda tez rasmiylashtirish va qaytarish kafolati</p>
                        </div>
                    </div>
                    <div className="services__mini">
                        <div className="mini__part1"><img src="https://asaxiy.uz/custom-assets/images/icons/card.svg" alt="" /></div>
                        <div className="mini__part2">
                            <p className="title__mini__part">Bo'lib to'lash</p>
                            <p className="desc__part__mini">3, 6, 9 va 12 oydavomida oldindan to'lovsiz</p>
                        </div>
                    </div>
                </div>

                <div className="big__part__bottom">
                    <div className="collection__part__bot">
                        <div className="first__collection__bot">
                            <div className="collection2">
                                <div className="item2 item2__title">Ma'lumotlar</div>
                                <div className="item2">Ommaviy oferta (Foydalanuvchi bitimi)</div>
                                <div className="item2">Muddatli toʻlov asosida sotib olishning umumiy qoidalari</div>
                                <div className="item2">Muddatli toʻlov shartlari</div>
                                <div className="item2">Buyurtma qanday beriladi?</div>
                                <div className="item2">Tovarlarni yetkazib berish va toʻlov turlari</div>
                                <div className="item2">Buyurtmani bekor qilish va tovarni qaytarish</div>
                                <div className="item2">Biz haqimizda</div>
                                <div className="item2">Promo Kod (Kupon) ni qanday aktivlashtiringiz mumkin!</div>
                            </div>
                        </div>
                        <div className="sec__collection__bot">
                            <div className="collection2">
                                <div className="item2 item2__title">Biz bilan aloqa</div>
                                <div className="item2"><BsTelephone/> <span>+998 71 200 01 05</span></div>
                                <div className="item2"><BsEnvelope/> <span>info@asaxiy.uz</span></div>
                                <div className="item2"><GoLocation/> <span>Chilonzor 3, Toshkent</span></div>
                            </div>
                        </div>
                        <div className="third__collection__bot">
                            <p className='social__media'>Biz ijtimoiy tarmoqlarda:</p>
                            <div className="icons__collection1">
                                <FiFacebook/>
                                <FaTelegramPlane/>
                                <BsInstagram/>
                                <AiFillYoutube/>
                                <BsWifi/>
                            </div>
                        </div>
                    </div>
                    <div className="collection__part__bot2">
                        <ul className="collection3">
                            <div className="item3 item3__title">To'lov turlari: </div>
                            <div className="item3"><img src="https://asaxiy.uz/custom-assets/images/apelsin-logo.svg" alt="" /></div>
                            <div className="item3"><img src="https://asaxiy.uz/custom-assets/images/payme.svg" alt="" /></div>
                            <div className="item3"><img src="https://asaxiy.uz/custom-assets/images/visa.svg" alt="" /></div>
                            <div className="item3"><img src="https://asaxiy.uz/custom-assets/images/mastercard.svg" alt="" /></div>
                            <div className="item3"><img src="https://asaxiy.uz/custom-assets/images/humo.svg" alt="" /></div>
                            <div className="item3"><img src="https://asaxiy.uz/custom-assets/images/uzcard.svg" alt="" /></div>
                        </ul>
                    </div>
                </div>
                <p className="last__sentence__footer">2015-2022 Internet-do’kon asaxiy.uz: Maishiy texnikalar va boshqalar.Mahsulotni yetkazib berish barcha viloyatlarda amalga oshiriladi. Barcha huquqlar himoyalangan.</p>
            </div>
        </div>
  )
}

export default Footer