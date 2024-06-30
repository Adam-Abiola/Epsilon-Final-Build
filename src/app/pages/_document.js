import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    {/* Add your meta tags, scripts, etc here */}

                    {/* Google tags (gta.gs) */}
                    <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZB74SVZ1E9"></script>
                    <script>
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments)}
                        gtag('js', new Date());

                        gtag('config', 'G-ZB74SVZ1E9');
                    </script>

                    <meta charset="utf-8" />
                    <meta content="width=device-width, initial-scale=1.0" name="viewport" />

                    <title>Epsilon Development Labs - Home</title>
                    <meta name="description" content="Epsilon Development Labs is a full-service development agency.
                        With us, you'll get high-quality code, smart designs, and an
                        experienced team that's ready to help you build your idea into
                        reality."/>

                    <meta name="author" content="Udochukwu Okoro" />
                    <meta name="google-site-verification" content="Ke7ubyFTpJ8jVmmcn961F-FQy0SHWmz0Feb95F8lFMU" />
                    <meta property="og:title" content="Epsilon Development Labs" />

                    <meta property="og:url" content="https://epsilondevlabs.com/" />
                    <meta property="og:image" content="assets/img/1.png" />
                    <meta property="og:description" content="Epsilon Development Labs is a full-service software development agency." />

                    {/* Favicons */}

                    <link href="assets/img/favicon-epsilon.png" rel="icon" />

                    {/* Google Fonts */}

                    <link
                        href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Jost:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
                        rel="stylesheet"
                    />

                    {/* Vendor Css files */}

                    <link href="assets/vendor/aos/aos.css" rel="stylesheet" />
                    <link
                        href="assets/vendor/bootstrap/css/bootstrap.min.css"
                        rel="stylesheet"
                    />
                    <link
                        href="assets/vendor/bootstrap-icons/bootstrap-icons.css"
                        rel="stylesheet"
                    />
                    <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
                    <link
                        href="assets/vendor/glightbox/css/glightbox.min.css"
                        rel="stylesheet"
                    />
                    <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet" />
                    <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />

                </Head>


            </Html>


        );
    }
}

export default MyDocument;