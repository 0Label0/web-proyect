import { Request, Response } from "express";
import { link } from "fs";
import path from "path";
import { text } from "stream/consumers";

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

  galery: (_: Request, res: Response) => {
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
