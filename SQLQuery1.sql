CREATE TABLE app_category (
 id INT IDENTITY(1,1) PRIMARY KEY,
 name NVARCHAR(100),
 description NVARCHAR(1000),
 created_at DATETIME,
 updated_at DATETIME
);

CREATE TABLE app_product (
 id INT IDENTITY(1,1) PRIMARY KEY,
 name NVARCHAR(100),
 description NVARCHAR(1000),
 price INT,
 sold INT,
 created_at DATETIME,
 updated_at DATETIME,
 category_id INT,
 CONSTRAINT FK_Product_Category FOREIGN KEY (category_id) REFERENCES app_category(id)
);

CREATE TABLE app_color (
 id INT IDENTITY(1,1) PRIMARY KEY,
 color VARCHAR(50),
 img VARCHAR(255),
 created_at DATETIME,
 updated_at DATETIME,
 product_id INT,
 CONSTRAINT FK_Product_Color FOREIGN KEY (product_id) REFERENCES app_product(id)
);

CREATE TABLE app_size (
 id INT IDENTITY(1,1) PRIMARY KEY,
 size VARCHAR(5),
 created_at DATETIME,
 updated_at DATETIME,
 product_id INT,
 CONSTRAINT FK_Product_Size FOREIGN KEY (product_id) REFERENCES app_product(id)
);

CREATE TABLE app_color_size (
 id INT IDENTITY(1,1) PRIMARY KEY,
 stock INT,
 sold INT,
 color_id INT,
 size_id INT,
 CONSTRAINT FK_color_color_size FOREIGN KEY (color_id) REFERENCES app_color(id),
 CONSTRAINT FK_size_color_size FOREIGN KEY (size_id) REFERENCES app_size(id)
);

CREATE TABLE app_user (
 id INT IDENTITY(1,1) PRIMARY KEY,
 username NVARCHAR(50) NOT NULL UNIQUE,
 email NVARCHAR(100) NOT NULL UNIQUE,
 password NVARCHAR(255) NOT NULL,
 first_name NVARCHAR(255) NOT NULL,
 last_name NVARCHAR(200) NOT NULL,
 phonenumber VARCHAR(20) NOT NULL,
 created_at DATETIME,
 updated_at DATETIME
);

CREATE TABLE app_cartitem (
 id INT IDENTITY(1,1) PRIMARY KEY,
 quantity INT,
 price INT,
 total INT,
 created_at DATETIME,
 updated_at DATETIME,
 user_id INT,
 color_size_id INT,
 CONSTRAINT FK_Cartitem_Users FOREIGN KEY (user_id) REFERENCES app_user(id),
 CONSTRAINT FK_CartItem_Color_Size FOREIGN KEY (color_size_id) REFERENCES app_color_size(id)
);

CREATE TABLE app_order (
 id INT IDENTITY(1,1) PRIMARY KEY,
 total INT,
 created_at DATETIME,
 user_id INT,
 deliveryFee INT,
 CONSTRAINT FK_user_order FOREIGN KEY (user_id) REFERENCES app_user(id)
);

CREATE TABLE app_shippingaddress (
 id INT IDENTITY(1,1) PRIMARY KEY,
 receiver NVARCHAR(20),
 phone VARCHAR(20),
 id_province VARCHAR(20),
 id_commune VARCHAR(20),
 id_district VARCHAR(20),
 province NVARCHAR(20),
 district NVARCHAR(20),
 commune NVARCHAR(20),
 detail NVARCHAR(200),
 df INT,
 created_at DATETIME,
 updated_at DATETIME,
 user_id INT,
 CONSTRAINT FK_ShippingAddress_User FOREIGN KEY (user_id) REFERENCES app_user(id)
);

CREATE TABLE app_orderitem (
 id INT IDENTITY(1,1) PRIMARY KEY,
 quantity INT,
 total INT,
 status NVARCHAR(100),
 delivered_at DATETIME,
 receiver NVARCHAR(20),
 phone VARCHAR(20),
 province NVARCHAR(20),
 district NVARCHAR(20),
 commune NVARCHAR(20),
 detail NVARCHAR(200),
 color_size_id INT,
 order_id INT,
 address_id INT,
 CONSTRAINT FK_color_orderitem FOREIGN KEY (color_size_id) REFERENCES app_color_size(id),
 CONSTRAINT FK_order_orderitem FOREIGN KEY (order_id) REFERENCES app_order(id),
 CONSTRAINT FK_address_orderitem FOREIGN KEY (address_id) REFERENCES app_shippingaddress(id)
);

CREATE TABLE app_slider (
 img VARCHAR(50),
 created_at DATETIME,
 updated_at DATETIME
);
