CREATE DATABASE IF NOT EXISTS ecommerce_vinos;

USE ecommerce_vinos;

CREATE TABLE IF NOT EXISTS Productos (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(255) NOT NULL,
    Descripcion TEXT,
    Precio DECIMAL(10, 2) NOT NULL,
    Imagen VARCHAR(255),
    UNIQUE KEY Nombre_UNIQUE (Nombre)
);


INSERT INTO Productos (Nombre, Descripcion, Precio, Imagen) VALUES
('Vino Exclusivo Añada Especial', 'Un vino exclusivo con una mezcla única de uvas seleccionadas, envejecido en barricas de roble francés.', 89.99, 'imagen1.jpg'),
('Château Grand Cru Classé', 'Este vino de la región de Burdeos es un Grand Cru Classé con una elegancia inigualable y sabores complejos.', 129.99, 'imagen2.jpg'),
('Vino Reserva de la Familia', 'Una joya enológica, este vino de reserva de la familia presenta una combinación armoniosa de frutas y especias.', 159.99, 'imagen3.jpg'),
('Vino Tinto Gran Reserva 10 Años', 'Con 10 años de envejecimiento, este gran reserva revela capas de sabores y taninos suaves.', 179.99, 'imagen4.jpg'),
('Vino Blanc de Blancs Premier Cru', 'Un champagne excepcional elaborado exclusivamente con uvas Chardonnay de los mejores viñedos Premier Cru.', 99.99, 'imagen5.jpg'),
('Merlot Centenario', 'Celebra el centenario con este merlot excepcional, envejecido para alcanzar la perfección en sabor y aroma.', 119.99, 'imagen6.jpg'),
('Syrah Edición Limitada Magnum', 'Esta edición limitada en formato Magnum de Syrah es una experiencia única para los amantes del vino.', 199.99, 'imagen7.jpg'),
('Vino Tinto Reserva de Montaña', 'Proveniente de viñedos de alta montaña, este vino tinto reserva captura la esencia del terroir único.', 149.99, 'imagen8.jpg'),
('Vino Blanco de Albariño Gran Selección', 'La gran selección de uvas Albariño da vida a este blanco de alta calidad con una frescura inigualable.', 79.99, 'imagen9.jpg'),
('Malbec Único', 'Un malbec único que refleja la diversidad del terruño, con notas intensas de frutas negras y violetas.', 109.99, 'imagen10.jpg'),
('Pinot Noir Edición Especial', 'Conocido por su elegancia, este pinot noir de edición especial es una expresión sublime de la variedad de uva.', 129.99, 'imagen11.jpg'),
('Vino Tinto Roble Americano Magnum', 'En formato Magnum, este vino tinto envejecido en barricas de roble americano ofrece intensidad y complejidad.', 189.99, 'imagen12.jpg'),
('Sauvignon Blanc Reserva Privada', 'Una reserva privada de sauvignon blanc con aromas intensos y una acidez refrescante.', 89.99, 'imagen13.jpg'),
('Cabernet Sauvignon de Viñedos Antiguos', 'Este cabernet sauvignon proviene de viñedos antiguos, destacando la profundidad y la estructura.', 169.99, 'imagen14.jpg'),
('Vino Rosado de Merlot Extra Seco', 'Un rosado extra seco de merlot con tonos delicados y un perfil refrescante, ideal para el verano.', 69.99, 'imagen15.jpg');
