import express from "express";
import { cryptopriceScraper } from "../utils/scraper.js";
export const getHome = (req, res) => {
  res.status(200).send("Hi there! this is home screen");
};
export const getScrappedData = async (req, res) => {
  try {
    const data = await cryptopriceScraper();
    return res.status(200).json({
      result: data,
    });
  } catch (err) {
    return res.status(500).json({
      err: err.toString(),
    });
  }
};
