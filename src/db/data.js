const text = [
	`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida cum sociis natoque penatibus et. Ultricies mi eget mauris pharetra et ultrices neque ornare. Scelerisque purus semper eget duis at tellus. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Nunc sed augue lacus viverra vitae congue eu. Ornare massa eget egestas purus viverra. Adipiscing commodo elit at imperdiet dui. Nisl condimentum id venenatis a condimentum. Magna etiam tempor orci eu lobortis. Curabitur gravida arcu ac tortor dignissim convallis. Nulla porttitor massa id neque aliquam vestibulum. Tortor at risus viverra adipiscing at.`,
	`Pellentesque dignissim enim sit amet venenatis urna cursus. Adipiscing commodo elit at imperdiet dui accumsan. Varius morbi enim nunc faucibus a pellentesque sit. Sed vulputate mi sit amet mauris commodo quis. Diam ut venenatis tellus in metus. Viverra vitae congue eu consequat ac felis donec. Mattis aliquam faucibus purus in massa tempor. Molestie nunc non blandit massa enim nec dui nunc. Venenatis urna cursus eget nunc. Tellus in hac habitasse platea dictumst vestibulum rhoncus est. Vulputate ut pharetra sit amet. Non diam phasellus vestibulum lorem. Nibh ipsum consequat nisl vel pretium lectus quam id leo. Porttitor eget dolor morbi non arcu risus quis. Mauris commodo quis imperdiet massa tincidunt nunc. Id faucibus nisl tincidunt eget nullam non nisi est sit. Ornare arcu dui vivamus arcu felis. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus. Tincidunt tortor aliquam nulla facilisi. Amet facilisis magna etiam tempor orci eu lobortis.`,

	`Venenatis lectus magna fringilla urna. Nibh tellus molestie nunc non blandit massa enim nec. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Tellus molestie nunc non blandit massa enim nec dui nunc. Augue mauris augue neque gravida in fermentum et sollicitudin ac. Amet mattis vulputate enim nulla aliquet. Nec nam aliquam sem et tortor consequat id. Lorem sed risus ultricies tristique nulla. Volutpat sed cras ornare arcu dui vivamus arcu felis. Aenean sed adipiscing diam donec adipiscing tristique risus. Vitae nunc sed velit dignissim sodales ut. Nunc mattis enim ut tellus elementum sagittis vitae. Potenti nullam ac tortor vitae purus. Sit amet aliquam id diam. Amet cursus sit amet dictum sit amet justo donec.`,

	`Ac odio tempor orci dapibus ultrices in iaculis. Libero enim sed faucibus turpis in eu. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Erat pellentesque adipiscing commodo elit at. Dolor purus non enim praesent elementum. Eu nisl nunc mi ipsum faucibus vitae. Suscipit tellus mauris a diam maecenas sed enim. Blandit turpis cursus in hac habitasse. Malesuada fames ac turpis egestas. Tellus at urna condimentum mattis pellentesque id. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Pharetra convallis posuere morbi leo urna molestie.`,

	`Nec nam aliquam sem et tortor. Sit amet justo donec enim diam vulputate. Sed viverra ipsum nunc aliquet bibendum. Faucibus vitae aliquet nec ullamcorper sit. Justo donec enim diam vulputate ut. Urna molestie at elementum eu. A arcu cursus vitae congue mauris rhoncus aenean vel elit. Arcu risus quis varius quam quisque id diam. Sit amet tellus cras adipiscing enim eu turpis egestas pretium. Tempor id eu nisl nunc mi ipsum faucibus vitae. Consequat ac felis donec et odio pellentesque diam. Condimentum mattis pellentesque id nibh tortor id aliquet lectus. Risus at ultrices mi tempus imperdiet. Ut aliquam purus sit amet luctus venenatis lectus magna fringilla. Vel facilisis volutpat est velit egestas dui id ornare arcu.`,

	`Sed libero enim sed faucibus turpis in eu. Eget mi proin sed libero enim sed. Neque egestas congue quisque egestas diam in. Congue eu consequat ac felis donec et odio pellentesque diam. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Sagittis purus sit amet volutpat consequat mauris. Venenatis a condimentum vitae sapien pellentesque. Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt. Id ornare arcu odio ut sem nulla. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Ut lectus arcu bibendum at varius vel.`,

	`Eu mi bibendum neque egestas congue quisque egestas. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Leo integer malesuada nunc vel risus commodo viverra. Eget felis eget nunc lobortis mattis. A lacus vestibulum sed arcu non odio euismod lacinia at. Aliquam etiam erat velit scelerisque in. Diam sollicitudin tempor id eu nisl nunc mi ipsum. Cursus euismod quis viverra nibh cras pulvinar mattis. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Amet nisl suscipit adipiscing bibendum est ultricies. Ac turpis egestas integer eget aliquet nibh. Ornare aenean euismod elementum nisi quis eleifend quam adipiscing. Ac tincidunt vitae semper quis lectus nulla at volutpat diam. Adipiscing commodo elit at imperdiet dui accumsan.`,

	`Auctor neque vitae tempus quam. Montes nascetur ridiculus mus mauris. Tellus orci ac auctor augue mauris augue. Arcu non odio euismod lacinia. Orci a scelerisque purus semper eget duis at. Purus viverra accumsan in nisl nisi scelerisque. Lacinia at quis risus sed. Auctor augue mauris augue neque. Quis vel eros donec ac. Ac tincidunt vitae semper quis lectus nulla at volutpat diam. Sodales ut etiam sit amet nisl purus in. Pellentesque adipiscing commodo elit at imperdiet dui accumsan. Lorem sed risus ultricies tristique nulla aliquet enim tortor. Arcu dictum varius duis at consectetur lorem donec massa sapien. Volutpat odio facilisis mauris sit. Diam ut venenatis tellus in metus vulputate eu scelerisque felis. Eu tincidunt tortor aliquam nulla facilisi cras.`,
	`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida cum sociis natoque penatibus et. Ultricies mi eget mauris pharetra et ultrices neque ornare. Scelerisque purus semper eget duis at tellus. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Nunc sed augue lacus viverra vitae congue eu. Ornare massa eget egestas purus viverra. Adipiscing commodo elit at imperdiet dui. Nisl condimentum id venenatis a condimentum. Magna etiam tempor orci eu lobortis. Curabitur gravida arcu ac tortor dignissim convallis. Nulla porttitor massa id neque aliquam vestibulum. Tortor at risus viverra adipiscing at.`,
	`Pellentesque dignissim enim sit amet venenatis urna cursus. Adipiscing commodo elit at imperdiet dui accumsan. Varius morbi enim nunc faucibus a pellentesque sit. Sed vulputate mi sit amet mauris commodo quis. Diam ut venenatis tellus in metus. Viverra vitae congue eu consequat ac felis donec. Mattis aliquam faucibus purus in massa tempor. Molestie nunc non blandit massa enim nec dui nunc. Venenatis urna cursus eget nunc. Tellus in hac habitasse platea dictumst vestibulum rhoncus est. Vulputate ut pharetra sit amet. Non diam phasellus vestibulum lorem. Nibh ipsum consequat nisl vel pretium lectus quam id leo. Porttitor eget dolor morbi non arcu risus quis. Mauris commodo quis imperdiet massa tincidunt nunc. Id faucibus nisl tincidunt eget nullam non nisi est sit. Ornare arcu dui vivamus arcu felis. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus. Tincidunt tortor aliquam nulla facilisi. Amet facilisis magna etiam tempor orci eu lobortis.`,

	`Venenatis lectus magna fringilla urna. Nibh tellus molestie nunc non blandit massa enim nec. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Tellus molestie nunc non blandit massa enim nec dui nunc. Augue mauris augue neque gravida in fermentum et sollicitudin ac. Amet mattis vulputate enim nulla aliquet. Nec nam aliquam sem et tortor consequat id. Lorem sed risus ultricies tristique nulla. Volutpat sed cras ornare arcu dui vivamus arcu felis. Aenean sed adipiscing diam donec adipiscing tristique risus. Vitae nunc sed velit dignissim sodales ut. Nunc mattis enim ut tellus elementum sagittis vitae. Potenti nullam ac tortor vitae purus. Sit amet aliquam id diam. Amet cursus sit amet dictum sit amet justo donec.`,

	`Ac odio tempor orci dapibus ultrices in iaculis. Libero enim sed faucibus turpis in eu. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Erat pellentesque adipiscing commodo elit at. Dolor purus non enim praesent elementum. Eu nisl nunc mi ipsum faucibus vitae. Suscipit tellus mauris a diam maecenas sed enim. Blandit turpis cursus in hac habitasse. Malesuada fames ac turpis egestas. Tellus at urna condimentum mattis pellentesque id. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Pharetra convallis posuere morbi leo urna molestie.`,

	`Nec nam aliquam sem et tortor. Sit amet justo donec enim diam vulputate. Sed viverra ipsum nunc aliquet bibendum. Faucibus vitae aliquet nec ullamcorper sit. Justo donec enim diam vulputate ut. Urna molestie at elementum eu. A arcu cursus vitae congue mauris rhoncus aenean vel elit. Arcu risus quis varius quam quisque id diam. Sit amet tellus cras adipiscing enim eu turpis egestas pretium. Tempor id eu nisl nunc mi ipsum faucibus vitae. Consequat ac felis donec et odio pellentesque diam. Condimentum mattis pellentesque id nibh tortor id aliquet lectus. Risus at ultrices mi tempus imperdiet. Ut aliquam purus sit amet luctus venenatis lectus magna fringilla. Vel facilisis volutpat est velit egestas dui id ornare arcu.`,

	`Sed libero enim sed faucibus turpis in eu. Eget mi proin sed libero enim sed. Neque egestas congue quisque egestas diam in. Congue eu consequat ac felis donec et odio pellentesque diam. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Sagittis purus sit amet volutpat consequat mauris. Venenatis a condimentum vitae sapien pellentesque. Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt. Id ornare arcu odio ut sem nulla. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Ut lectus arcu bibendum at varius vel.`,

	`Eu mi bibendum neque egestas congue quisque egestas. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Leo integer malesuada nunc vel risus commodo viverra. Eget felis eget nunc lobortis mattis. A lacus vestibulum sed arcu non odio euismod lacinia at. Aliquam etiam erat velit scelerisque in. Diam sollicitudin tempor id eu nisl nunc mi ipsum. Cursus euismod quis viverra nibh cras pulvinar mattis. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Amet nisl suscipit adipiscing bibendum est ultricies. Ac turpis egestas integer eget aliquet nibh. Ornare aenean euismod elementum nisi quis eleifend quam adipiscing. Ac tincidunt vitae semper quis lectus nulla at volutpat diam. Adipiscing commodo elit at imperdiet dui accumsan.`,

	`Auctor neque vitae tempus quam. Montes nascetur ridiculus mus mauris. Tellus orci ac auctor augue mauris augue. Arcu non odio euismod lacinia. Orci a scelerisque purus semper eget duis at. Purus viverra accumsan in nisl nisi scelerisque. Lacinia at quis risus sed. Auctor augue mauris augue neque. Quis vel eros donec ac. Ac tincidunt vitae semper quis lectus nulla at volutpat diam. Sodales ut etiam sit amet nisl purus in. Pellentesque adipiscing commodo elit at imperdiet dui accumsan. Lorem sed risus ultricies tristique nulla aliquet enim tortor. Arcu dictum varius duis at consectetur lorem donec massa sapien. Volutpat odio facilisis mauris sit. Diam ut venenatis tellus in metus vulputate eu scelerisque felis. Eu tincidunt tortor aliquam nulla facilisi cras.`,
	`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida cum sociis natoque penatibus et. Ultricies mi eget mauris pharetra et ultrices neque ornare. Scelerisque purus semper eget duis at tellus. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Nunc sed augue lacus viverra vitae congue eu. Ornare massa eget egestas purus viverra. Adipiscing commodo elit at imperdiet dui. Nisl condimentum id venenatis a condimentum. Magna etiam tempor orci eu lobortis. Curabitur gravida arcu ac tortor dignissim convallis. Nulla porttitor massa id neque aliquam vestibulum. Tortor at risus viverra adipiscing at.`,
	`Pellentesque dignissim enim sit amet venenatis urna cursus. Adipiscing commodo elit at imperdiet dui accumsan. Varius morbi enim nunc faucibus a pellentesque sit. Sed vulputate mi sit amet mauris commodo quis. Diam ut venenatis tellus in metus. Viverra vitae congue eu consequat ac felis donec. Mattis aliquam faucibus purus in massa tempor. Molestie nunc non blandit massa enim nec dui nunc. Venenatis urna cursus eget nunc. Tellus in hac habitasse platea dictumst vestibulum rhoncus est. Vulputate ut pharetra sit amet. Non diam phasellus vestibulum lorem. Nibh ipsum consequat nisl vel pretium lectus quam id leo. Porttitor eget dolor morbi non arcu risus quis. Mauris commodo quis imperdiet massa tincidunt nunc. Id faucibus nisl tincidunt eget nullam non nisi est sit. Ornare arcu dui vivamus arcu felis. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus. Tincidunt tortor aliquam nulla facilisi. Amet facilisis magna etiam tempor orci eu lobortis.`,

	`Venenatis lectus magna fringilla urna. Nibh tellus molestie nunc non blandit massa enim nec. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Tellus molestie nunc non blandit massa enim nec dui nunc. Augue mauris augue neque gravida in fermentum et sollicitudin ac. Amet mattis vulputate enim nulla aliquet. Nec nam aliquam sem et tortor consequat id. Lorem sed risus ultricies tristique nulla. Volutpat sed cras ornare arcu dui vivamus arcu felis. Aenean sed adipiscing diam donec adipiscing tristique risus. Vitae nunc sed velit dignissim sodales ut. Nunc mattis enim ut tellus elementum sagittis vitae. Potenti nullam ac tortor vitae purus. Sit amet aliquam id diam. Amet cursus sit amet dictum sit amet justo donec.`,

	`Ac odio tempor orci dapibus ultrices in iaculis. Libero enim sed faucibus turpis in eu. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Erat pellentesque adipiscing commodo elit at. Dolor purus non enim praesent elementum. Eu nisl nunc mi ipsum faucibus vitae. Suscipit tellus mauris a diam maecenas sed enim. Blandit turpis cursus in hac habitasse. Malesuada fames ac turpis egestas. Tellus at urna condimentum mattis pellentesque id. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Pharetra convallis posuere morbi leo urna molestie.`,

	`Nec nam aliquam sem et tortor. Sit amet justo donec enim diam vulputate. Sed viverra ipsum nunc aliquet bibendum. Faucibus vitae aliquet nec ullamcorper sit. Justo donec enim diam vulputate ut. Urna molestie at elementum eu. A arcu cursus vitae congue mauris rhoncus aenean vel elit. Arcu risus quis varius quam quisque id diam. Sit amet tellus cras adipiscing enim eu turpis egestas pretium. Tempor id eu nisl nunc mi ipsum faucibus vitae. Consequat ac felis donec et odio pellentesque diam. Condimentum mattis pellentesque id nibh tortor id aliquet lectus. Risus at ultrices mi tempus imperdiet. Ut aliquam purus sit amet luctus venenatis lectus magna fringilla. Vel facilisis volutpat est velit egestas dui id ornare arcu.`,

	`Sed libero enim sed faucibus turpis in eu. Eget mi proin sed libero enim sed. Neque egestas congue quisque egestas diam in. Congue eu consequat ac felis donec et odio pellentesque diam. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Sagittis purus sit amet volutpat consequat mauris. Venenatis a condimentum vitae sapien pellentesque. Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt. Id ornare arcu odio ut sem nulla. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Ut lectus arcu bibendum at varius vel.`,

	`Eu mi bibendum neque egestas congue quisque egestas. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Leo integer malesuada nunc vel risus commodo viverra. Eget felis eget nunc lobortis mattis. A lacus vestibulum sed arcu non odio euismod lacinia at. Aliquam etiam erat velit scelerisque in. Diam sollicitudin tempor id eu nisl nunc mi ipsum. Cursus euismod quis viverra nibh cras pulvinar mattis. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Amet nisl suscipit adipiscing bibendum est ultricies. Ac turpis egestas integer eget aliquet nibh. Ornare aenean euismod elementum nisi quis eleifend quam adipiscing. Ac tincidunt vitae semper quis lectus nulla at volutpat diam. Adipiscing commodo elit at imperdiet dui accumsan.`,

	`Auctor neque vitae tempus quam. Montes nascetur ridiculus mus mauris. Tellus orci ac auctor augue mauris augue. Arcu non odio euismod lacinia. Orci a scelerisque purus semper eget duis at. Purus viverra accumsan in nisl nisi scelerisque. Lacinia at quis risus sed. Auctor augue mauris augue neque. Quis vel eros donec ac. Ac tincidunt vitae semper quis lectus nulla at volutpat diam. Sodales ut etiam sit amet nisl purus in. Pellentesque adipiscing commodo elit at imperdiet dui accumsan. Lorem sed risus ultricies tristique nulla aliquet enim tortor. Arcu dictum varius duis at consectetur lorem donec massa sapien. Volutpat odio facilisis mauris sit. Diam ut venenatis tellus in metus vulputate eu scelerisque felis. Eu tincidunt tortor aliquam nulla facilisi cras.`,
]

export default text
