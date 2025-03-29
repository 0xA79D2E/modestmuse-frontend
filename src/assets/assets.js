import p_img1 from './p_img1.png'
import p_img2_1 from './p_img2_1.png'
import p_img2_2 from './p_img2_2.png'
import p_img2_3 from './p_img2_3.png'
import p_img3 from './p_img3.png'
import p_img4 from './p_img4.png'


import logo from './logo.jpeg'
import hero_img from './hero_img.png'
import cart_icon from './cart_icon.png'
import bin_icon from './bin_icon.png'
import dropdown_icon from './dropdown_icon.png'
import exchange_icon from './exchange_icon.png'
import profile_icon from './profile_icon.png'
import quality_icon from './quality_icon.png'
import search_icon from './search_icon.png'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import support_img from './support_img.png'
import menu_icon from './menu_icon.png'
import about_img from './about_img.png'
import contact_img from './contact_img.png'
import razorpay_logo from './razorpay_logo.png'
import stripe_logo from './stripe_logo.png'
import cross_icon from './cross_icon.png'

export const assets = {
    logo,
    hero_img,
    cart_icon,
    dropdown_icon,
    exchange_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_img,
    menu_icon,
    about_img,
    contact_img,
    razorpay_logo,
    stripe_logo,
    cross_icon
}
export const products = [
    {
        _id: "aaaaa",
        name: "Jersey Hijab",
        description: "A soft, comfortable jersey hijab designed for all-day wear. Its lightweight and stretchy fabric makes it perfect for any occasion, offering both coverage and comfort.",
        price: 40,
        image: [p_img1],
        category: "Women",
        subCategory: "Accessories",
        sizes: ["One Size"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "aaaab",
        name: "Chiffon Hijab",
        description: "A beautifully flowing chiffon hijab that adds a touch of elegance to any outfit. Its lightweight, breathable fabric drapes effortlessly for a modest yet sophisticated look.",
        price: 50,
        image: [p_img2_1, p_img2_2, p_img2_3],
        category: "Women",
        subCategory: "Accessories",
        sizes: ["One Size"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaaac",
        name: "Oversized Hoodie",
        description: "An ultra-comfortable oversized hoodie, perfect for layering. Made from soft cotton fabric, this cozy piece offers both warmth and style, ideal for casual outings or lounging.",
        price: 85,
        image: [p_img3],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716348546448,
        bestseller: false
    },
    {
        _id: "aaaad",
        name: "Wide Leg Joggers",
        description: "Stylish and comfortable wide leg joggers, perfect for a relaxed yet chic look. Made from breathable cotton, these joggers are ideal for both casual wear and athleisure outfits.",
        price: 75,
        image: [p_img4],
        category: "Women",
        subCategory: "Bottomwear",
        sizes: ["S", "M", "L"],
        date: 1716621345448,
        bestseller: true
    }
]
