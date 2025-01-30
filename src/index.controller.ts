import { Request, Response } from "express";
import connection from "./db";
import path from "path";

const controllers = {
  home: (_: Request, res: Response) => {
    res.render('index', {
      layout: 'main',
      menuItems: [
        { text: 'Inicio', link: '#' },
        { text: 'Galeria', link: '/galery' },
        { text: 'Presupuesto', link: '/presupuesto' },
        { text: 'Contacto', link: '/contact' },
      ]
    });
  },

  presupuesto: (_: Request, res: Response) => {
    res.render('templates/presupuesto', {
      layout: 'main',
      menuItems: [
        { text: 'Inicio', link: '/' },
        { text: 'Galeria', link: '/galery' },
        { text: 'Presupuesto', link: '#' },
        { text: 'Contacto', link: '/contact' },
      ]
    });
  },

  galery: async(_: Request, res: Response) => {
    connection.query('SELECT * FROM products', (err, products)=> {
      if (err) {
        return res.status(500).send('Error en la consulta');
      }
      res.json(products);
    });
    res.render('templates/galery', {
      layout: 'main',
      menuItems: [
        { text: 'Inicio', link: '/' },
        { text: 'Galeria', link: '#' },
        { text: 'Presupuesto', link: '/presupuesto' },
        { text: 'Contacto', link: '/contact' },
      ]
    });
  },

  contact: (_: Request, res: Response) => {
    res.render('templates/contact', {
      layout: 'main',
      menuItems: [
        { text: 'Inicio', link: '/' },
        { text: 'Galeria', link: '/galery' },
        { text: 'Presupuesto', link: '/presupuesto' },
        { text: 'Contacto', link: '#' },
      ]
    });
  },

  // Página no encontrada
  notFound: (_: Request, res: Response) => {
    const pathJoin = path.resolve('public', 'notFound', 'notFound.html');
    res.status(404).sendFile(pathJoin);
  }
};

export default controllers;
