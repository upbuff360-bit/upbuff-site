const heroImage = new Proxy({"src":"/_astro/hero-image.DkXAGfhA.png","width":1499,"height":945,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sreeg/Documents/Projects/astrowind-main-latest/src/assets/images/hero-image.png";
							}
							
							return target[name];
						}
					});

export { heroImage as default };
