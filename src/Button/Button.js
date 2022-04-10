import React from "react";
import clsx from "clsx";
import styles from "./Button.module.css";

export default function Button({ primary }) {
	const classes = clsx(styles.btn, {
		[styles.primary]: primary,
	});
	return <button className={classes}>Click me</button>;
}
