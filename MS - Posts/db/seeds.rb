Image.create( user_id: "user_1UXS", title: "new life #workout", url: "http://www.stylishwife.com/wp-content/uploads/2015/04/Cute-Teen-Fashion-Selfie-Girls-36.jpg", latitude: 4.7110, longitude: 74.0721)
Image.create( user_id: "user_1UXS", title: "hey #selfie", url: "https://s-media-cache-ak0.pinimg.com/originals/2e/0f/e0/2e0fe00f3428fcd0d04db015d01eabfc.jpg", latitude: 4.7110, longitude: 74.0721)
Image.create( user_id: "user_1UXS", title: "#havingfun #ride", url: "https://s-media-cache-ak0.pinimg.com/564x/35/99/dc/3599dc38596f1b9e31d58e4e7177b864.jpg", latitude: 4.7110, longitude: 74.0721)

Image.create( user_id: "user_2ZTY", title: "scary", url: "http://s8.favim.com/orig/72/boy-boys-instagram-joey-graceffa-Favim.com-717728.jpg", latitude: 4.7110, longitude: 74.0721)
Image.create( user_id: "user_2ZTY", title: "una bonita tarde #bogota", url: "https://s-media-cache-ak0.pinimg.com/736x/bd/c7/52/bdc7523af322cb10b10fe519886bf4bc.jpg", latitude: 4.7110, longitude: 74.0721)

Comment.create( image_id: 1, user_id: "user_2ZTY", comment: "wow :D")
Comment.create( image_id: 1, user_id: "user_3PLA", comment: "keep motivated")
Comment.create( image_id: 1, user_id: "user_1UXS", comment: "@user_2ZTY lindo ;)")

Comment.create( image_id: 3, user_id: "user_2ZTY", comment: "no invitaste :(")

Comment.create( image_id: 4, user_id: "user_1UXS", comment: "jajaja no habias ido antes a una fruteria?")
Comment.create( image_id: 4, user_id: "user_2ZTY", comment: "jaja noo u.u")

Score.create( image_id: 1, user_id: "user_2ZTY", score: 5)
Score.create( image_id: 1, user_id: "user_3PLA", score: 4)

Score.create( image_id: 4, user_id: "user_1UXS", score: 4)
Score.create( image_id: 4, user_id: "user_3PLA", score: 4)
