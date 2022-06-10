import { Injectable } from '@angular/core';
import { IPlanet } from 'src/app/interfaces/iplanet';

@Injectable({
	providedIn: 'root'
})

export class PlanetService {

	database: IPlanet[] = [
		{
			id: 1,
			name: "Ariel",
			info: "Ariel is the fourth-largest of the 27 known moons of Uranus. Ariel orbits and rotates in the equatorial plane of Uranus, which is almost perpendicular to the orbit of Uranus and so has an extreme seasonal cycle.",
			imageUrl: "https://solarsystem.nasa.gov/system/resources/list_images/2406_ariel_th.jpg",
			embedUrl: "https://solarsystem.nasa.gov/gltf_embed/2406"
		},
		{
			id: 2,
			name: "Arrokoth",
			info: "Arrokoth is a trans-Neptunian object located in the Kuiper belt. Arrokoth became the farthest and most primitive object in the Solar System visited by a spacecraft when the NASA space probe New Horizons conducted a flyby on 1 January 2019.",
			imageUrl: "https://solarsystem.nasa.gov/system/resources/list_images/2365_mu69_th.jpg",
			embedUrl: "https://solarsystem.nasa.gov/gltf_embed/2365"
		},
		{
			id: 3,
			name: "Bennu",
			info: "Bennu is a carbonaceous asteroid in the Apollo group discovered by the LINEAR Project on 11 September 1999. It is a potentially hazardous object that is listed on the Sentry Risk Table and tied for the highest cumulative rating on the Palermo Technical Impact Hazard Scale.",
			imageUrl: "https://solarsystem.nasa.gov/system/resources/list_images/2403_bennu_th.jpg",
			embedUrl: "https://solarsystem.nasa.gov/gltf_embed/2403"
		},
		{
			id: 4,
			name: "Callisto",
			info: "Callisto, or Jupiter IV, is the second-largest moon of Jupiter, after Ganymede. It is the third-largest moon in the Solar System after Ganymede and Saturn's largest moon Titan, and the largest object in the Solar System that may not be properly differentiated. Callisto was discovered in 1610 by Galileo Galilei.",
			imageUrl: "https://solarsystem.nasa.gov/system/resources/list_images/2402_callisto_th.jpg",
			embedUrl: "https://solarsystem.nasa.gov/gltf_embed/2402"
		},
		{
			id: 5,
			name: "Ceres",
			info: "Ceres is a dwarf planet in the asteroid belt between the orbits of Mars and Jupiter. Ceres was the first asteroid discovered, on 1 January 1801 by Giuseppe Piazzi at Palermo Astronomical Observatory in Sicily.",
			imageUrl: "https://solarsystem.nasa.gov/system/resources/list_images/2400_ceres_th.jpg",
			embedUrl: "https://solarsystem.nasa.gov/gltf_embed/2400"
		},
		{
			id: 6,
			name: "Charon",
			info: "Charon, known as Pluto I, is the largest of the five known natural satellites of the dwarf planet Pluto. It has a mean radius of 606 km. Charon is the sixth-largest known trans-Neptunian object after Pluto, Eris, Haumea, Makemake and Gonggong.",
			imageUrl: "https://solarsystem.nasa.gov/system/resources/list_images/2399_charon_th.jpg",
			embedUrl: "https://solarsystem.nasa.gov/gltf_embed/2399"
		},
		{
			id: 7,
			name: "Deimos",
			info: "Deimos is the smaller and outermost of the two natural satellites of Mars, the other being Phobos. Deimos has a mean radius of 6.2 km and takes 30.3 hours to orbit Mars. Deimos is 23,460 km from Mars, much farther than Mars's other moon, Phobos.",
			imageUrl: "https://solarsystem.nasa.gov/system/resources/list_images/2434_deimos_th.jpg",
			embedUrl: "https://solarsystem.nasa.gov/gltf_embed/2434"
		},
		{
			id: 8,
			name: "Dione",
			info: "Dione is a moon of Saturn. It was discovered by Italian astronomer Giovanni Domenico Cassini in 1684. It is named after the Titaness Dione of Greek mythology. It is also designated Saturn IV.",
			imageUrl: "https://solarsystem.nasa.gov/system/resources/list_images/2396_dione_th.jpg",
			embedUrl: "https://solarsystem.nasa.gov/gltf_embed/2396"
		},
		{
			id: 9,
			name: "Earth",
			info: "Earth, third planet from the Sun and the fifth largest planet in the solar system in terms of size and mass. Its single most outstanding feature is that its near-surface environments are the only places in the universe known to harbour life. It is designated by the symbol ♁.",
			imageUrl: "https://solarsystem.nasa.gov/system/resources/list_images/2393_earth_th.jpg",
			embedUrl: "https://solarsystem.nasa.gov/gltf_embed/2393"
		},
		{
			id: 10,
			name: "Moon",
			info: "The Moon is Earth's only natural satellite. At about one-quarter the diameter of Earth, it is the fifth largest satellite in the Solar System, the largest satellite in the Solar System relative to its major planet, and larger than any known dwarf planet.",
			imageUrl: "https://solarsystem.nasa.gov/system/resources/list_images/2366_moon_th.jpg",
			embedUrl: "https://solarsystem.nasa.gov/gltf_embed/2366"
		},
		{
			id: 11,
			name: "Enceladus",
			info: "Enceladus is the sixth-largest moon of Saturn. It is about 500 kilometers in diameter, about a tenth of that of Saturn's largest moon, Titan. Enceladus is mostly covered by fresh, clean ice, making it one of the most reflective bodies of the Solar System.",
			imageUrl: "https://solarsystem.nasa.gov/system/resources/list_images/2391_enceladus_th.jpg",
			embedUrl: "https://solarsystem.nasa.gov/gltf_embed/2391"
		},
		{
			id: 12,
			name: "Eris",
			info: "Eris is the most massive and second-largest known dwarf planet in the Solar System. It is a trans-Neptunian object in the scattered disk and has a high-eccentricity orbit. Eris was discovered in January 2005 by a Palomar Observatory-based team led by Mike Brown and verified later that year.",
			imageUrl: "https://solarsystem.nasa.gov/system/resources/list_images/2390_eris_th.jpg",
			embedUrl: "https://solarsystem.nasa.gov/gltf_embed/2390"
		},
		{
			id: 13,
			name: "Eros",
			info: "Eros, provisional designation 1898 DQ, is a stony asteroid of the Amor group and the first discovered and second-largest near-Earth object with an elongated shape and a mean diameter of approximately 16.8 kilometers.",
			imageUrl: "https://solarsystem.nasa.gov/system/resources/list_images/2389_eros_th.jpg",
			embedUrl: "https://solarsystem.nasa.gov/gltf_embed/2389"
		},
		{
			id: 14,
			name: "Europa",
			info: "Europa, or Jupiter II, is the smallest of the four Galilean moons orbiting Jupiter, and the sixth-closest to the planet of all the 80 known moons of Jupiter. It is also the sixth-largest moon in the Solar System.",
			imageUrl: "https://solarsystem.nasa.gov/system/resources/list_images/2388_europa_th.jpg",
			embedUrl: "https://solarsystem.nasa.gov/gltf_embed/2388"
		},
		{
			id: 15,
			name: "Ganymede",
			info: "Ganymede, a satellite of Jupiter, is the largest and most massive of the Solar System's moons. The ninth-largest object of the Solar System, it is the largest without a substantial atmosphere.",
			imageUrl: "https://solarsystem.nasa.gov/system/resources/list_images/2385_ganymede_th.jpg",
			embedUrl: "https://solarsystem.nasa.gov/gltf_embed/2385"
		},
		{
			id: 16,
			name: "Haumea",
			info: "Haumea, unusual dwarf planet orbiting the Sun in the Kuiper belt beyond Pluto. It was discovered in 2003 by a team of American astronomers at Cerro Tololo Inter-American Observatory. Originally called 2003 EL61, Haumea is named for the Hawaiian goddess of birth and fertility.",
			imageUrl: "https://solarsystem.nasa.gov/system/resources/list_images/2384_haumea_th.jpg",
			embedUrl: "https://solarsystem.nasa.gov/gltf_embed/2384"
		},
		{
			id: 17,
			name: "Hyperion",
			info: "Hyperion, also known as Saturn VII, is a moon of Saturn discovered by William Cranch Bond, his son George Phillips Bond and William Lassell in 1848. It is distinguished by its irregular shape, its chaotic rotation, and its unexplained sponge-like appearance. It was the first non-round moon to be discovered.",
			imageUrl: "https://solarsystem.nasa.gov/system/resources/list_images/2382_hyperion_th.jpg",
			embedUrl: "https://solarsystem.nasa.gov/gltf_embed/2382"
		},
		{
			id: 18,
			name: "Iapetus",
			info: "Iapetus is the third-largest natural satellite of Saturn and the eleventh-largest in the Solar System. Discoveries by the Cassini mission in 2007 revealed several unusual features, such as a massive equatorial ridge running three-quarters of the way around the moon and a distinctive color pattern.",
			imageUrl: "https://solarsystem.nasa.gov/system/resources/list_images/2381_iapetus_th.jpg",
			embedUrl: "https://solarsystem.nasa.gov/gltf_embed/2381"
		},
		{
			id: 19,
			name: "Io",
			info: "Io, also called Jupiter I, innermost of the four large moons (Galilean satellites) discovered around Jupiter by the Italian astronomer Galileo in 1610. It was probably also discovered independently that same year by the German astronomer Simon Marius, who named it after Io of Greek mythology.",
			imageUrl: "https://solarsystem.nasa.gov/system/resources/list_images/2379_io_th.jpg",
			embedUrl: "https://solarsystem.nasa.gov/gltf_embed/2379"
		},
		{
			id: 20,
			name: "Itokawa",
			info: "Itokawa is a sub-kilometer near-Earth object of the Apollo group and a potentially hazardous asteroid. It was discovered by the LINEAR program in 1998 and later named after Japanese rocket engineer Hideo Itokawa.",
			imageUrl: "https://solarsystem.nasa.gov/system/resources/list_images/2377_itokawa_th.jpg",
			embedUrl: "https://solarsystem.nasa.gov/gltf_embed/2377"
		},
		{
			id: 21,
			name: "Jupiter",
			info: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined, but slightly less than one-thousandth the mass of the Sun.",
			imageUrl: "https://solarsystem.nasa.gov/system/resources/list_images/2375_jupiter_th.jpg",
			embedUrl: "https://solarsystem.nasa.gov/gltf_embed/2375"
		},
		{
			id: 22,
			name: "Makemake",
			info: "Makemake is a dwarf planet and – depending on how they are defined – the second-largest Kuiper belt object in the classical population, with a diameter approximately 60% that of Pluto. It has one known satellite.",
			imageUrl: "https://solarsystem.nasa.gov/system/resources/list_images/2374_makemake_th.jpg",
			embedUrl: "https://solarsystem.nasa.gov/gltf_embed/2374"
		},
		{
			id: 23,
			name: "Mars",
			info: "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war.",
			imageUrl: "https://solarsystem.nasa.gov/system/resources/list_images/2372_mars_th.jpg",
			embedUrl: "https://solarsystem.nasa.gov/gltf_embed/2372"
		},
		{
			id: 24,
			name: "Mercury",
			info: "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets.",
			imageUrl: "https://solarsystem.nasa.gov/system/resources/list_images/2369_mercury_th.jpg",
			embedUrl: "https://solarsystem.nasa.gov/gltf_embed/2369"
		},
		{
			id: 25,
			name: "Mimas",
			info: "Mimas, also designated Saturn I, is a moon of Saturn which was discovered in 1789 by William Herschel. It is named after Mimas, a son of Gaia in Greek mythology. With a diameter of 396 kilometres, it is the smallest astronomical body that is known to still be rounded in shape because of self-gravitation.",
			imageUrl: "https://solarsystem.nasa.gov/system/resources/list_images/2368_mimas_th.jpg",
			embedUrl: "https://solarsystem.nasa.gov/gltf_embed/2368"
		},
		{
			id: 26,
			name: "Miranda",
			info: "Miranda, also designated Uranus V, is the smallest and innermost of Uranus's five round satellites. It was discovered by Gerard Kuiper on 16 February 1948 at McDonald Observatory in Texas, and named after Miranda from William Shakespeare's play The Tempest.",
			imageUrl: "https://solarsystem.nasa.gov/system/resources/list_images/2367_miranda_th.jpg",
			embedUrl: "https://solarsystem.nasa.gov/gltf_embed/2367"
		},
		{
			id: 27,
			name: "Neptune",
			info: "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, and slightly more massive than its near-twin Uranus.",
			imageUrl: "https://solarsystem.nasa.gov/system/resources/list_images/2364_neptune_th.jpg",
			embedUrl: "https://solarsystem.nasa.gov/gltf_embed/2364"
		},
		{
			id: 28,
			name: "Oberon",
			info: "Oberon, also designated Uranus IV, is the outermost major moon of the planet Uranus. It is the second-largest and second most massive of the Uranian moons, and the ninth most massive moon in the Solar System.",
			imageUrl: "https://solarsystem.nasa.gov/system/resources/list_images/2362_overon_th.jpg",
			embedUrl: "https://solarsystem.nasa.gov/gltf_embed/2362"
		},
		{
			id: 29,
			name: "Phobos",
			info: "Phobos is the innermost and larger of the two natural satellites of Mars, the other being Deimos. Both moons were discovered in 1877 by American astronomer Asaph Hall. Phobos is named after the Greek deity Phobos, a son of Ares and twin brother of Deimos.",
			imageUrl: "https://solarsystem.nasa.gov/system/resources/list_images/2358_phobos_th.jpg",
			embedUrl: "https://solarsystem.nasa.gov/gltf_embed/2358"
		},
		{
			id: 30,
			name: "Pluto",
			info: "Pluto is a dwarf planet in the Kuiper belt, a ring of bodies beyond the orbit of Neptune. It was the first object discovered in the Kuiper belt and remains the largest known body in that area. After Pluto was discovered in 1930, it was declared the ninth planet from the Sun.",
			imageUrl: "https://solarsystem.nasa.gov/system/resources/list_images/2357_pluto_th.jpg",
			embedUrl: "https://solarsystem.nasa.gov/gltf_embed/2357"
		},
		{
			id: 31,
			name: "Rhea",
			info: "Rhea is the second-largest moon of Saturn and the ninth-largest moon in the Solar System. It is the smallest body in the Solar System for which precise measurements have confirmed a shape consistent with hydrostatic equilibrium. It was discovered in 1672 by Giovanni Domenico Cassini.",
			imageUrl: "https://solarsystem.nasa.gov/system/resources/list_images/2354_rhea_th.jpg",
			embedUrl: "https://solarsystem.nasa.gov/gltf_embed/2354"
		},
		{
			id: 32,
			name: "Saturn",
			info: "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It has only one-eighth the average density of Earth; however, with its larger volume, Saturn is over 95 times more massive.",
			imageUrl: "https://solarsystem.nasa.gov/system/resources/list_images/2355_saturn_th.jpg",
			embedUrl: "https://solarsystem.nasa.gov/gltf_embed/2355"
		},
		{
			id: 33,
			name: "Sun",
			info: "The Sun is the star at the center of the Solar System. It is a nearly perfect ball of hot plasma, heated to incandescence by nuclear fusion reactions in its core, radiating the energy mainly as visible light, ultraviolet, and infrared radiation. It is the most important source of energy for life on Earth.",
			imageUrl: "https://solarsystem.nasa.gov/system/resources/list_images/2352_sun_th.jpg",
			embedUrl: "https://solarsystem.nasa.gov/gltf_embed/2352"
		},
		{
			id: 34,
			name: "Tethys",
			info: "Tethys, or Saturn III, is a mid-sized moon of Saturn about 1,060 km across. It was discovered by G. D. Cassini in 1684 and is named after the titan Tethys of Greek mythology.",
			imageUrl: "https://solarsystem.nasa.gov/system/resources/list_images/2351_tethys_th.jpg",
			embedUrl: "https://solarsystem.nasa.gov/gltf_embed/2351"
		},
		{
			id: 35,
			name: "Titan",
			info: "Titan is the largest moon of Saturn and the second-largest natural satellite in the Solar System. It is the only moon known to have a dense atmosphere, and is the only known object in space other than Earth on which clear evidence of stable bodies of surface liquid has been found.",
			imageUrl: "https://solarsystem.nasa.gov/system/resources/list_images/2349_titan_th.jpg",
			embedUrl: "https://solarsystem.nasa.gov/gltf_embed/2349"
		},
		{
			id: 36,
			name: "Titania",
			info: "Titania, also designated Uranus III, is the largest of the moons of Uranus and the eighth largest moon in the Solar System at a diameter of 1,578 kilometres. Discovered by William Herschel in 1787, it is named after the queen of the fairies in Shakespeare's A Midsummer Night's Dream.",
			imageUrl: "https://solarsystem.nasa.gov/system/resources/list_images/2348_titania_th.jpg",
			embedUrl: "https://solarsystem.nasa.gov/gltf_embed/2348"
		},
		{
			id: 37,
			name: "Triton",
			info: "Triton is the largest natural satellite of the planet Neptune, and was the first Neptunian moon to be discovered, on October 10, 1846, by English astronomer William Lassell. It is the only large moon in the Solar System with a retrograde orbit, an orbit in the direction opposite to its planet's rotation.",
			imageUrl: "https://solarsystem.nasa.gov/system/resources/list_images/2346_triton_th.jpg",
			embedUrl: "https://solarsystem.nasa.gov/gltf_embed/2346"
		},
		{
			id: 38,
			name: "Umbriel",
			info: "Umbriel is a moon of Uranus discovered on October 24, 1851, by William Lassell. It was discovered at the same time as Ariel and named after a character in Alexander Pope's poem The Rape of the Lock.",
			imageUrl: "https://solarsystem.nasa.gov/system/resources/list_images/2345_umbriel_th.jpg",
			embedUrl: "https://solarsystem.nasa.gov/gltf_embed/2345"
		},
		{
			id: 39,
			name: "Uranus",
			info: "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus, who, according to Greek mythology, was the great-grandfather of Ares, grandfather of Zeus and father of Cronus. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",
			imageUrl: "https://solarsystem.nasa.gov/system/resources/list_images/2344_uranus_th.jpg",
			embedUrl: "https://solarsystem.nasa.gov/gltf_embed/2344"
		},
		{
			id: 40,
			name: "Venus",
			info: "Venus is the second planet from the Sun and is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be visible to the naked eye in broad daylight.",
			imageUrl: "https://solarsystem.nasa.gov/system/resources/list_images/2343_venus_th.jpg",
			embedUrl: "https://solarsystem.nasa.gov/gltf_embed/2343"
		},
		{
			id: 41,
			name: "Vesta",
			info: "Vesta is one of the largest objects in the asteroid belt, with a mean diameter of 525 kilometres. It was discovered by the German astronomer Heinrich Wilhelm Matthias Olbers on 29 March 1807 and is named after Vesta, the virgin goddess of home and hearth from Roman mythology.",
			imageUrl: "https://solarsystem.nasa.gov/system/resources/list_images/2341_vesta_th.jpg",
			embedUrl: "https://solarsystem.nasa.gov/gltf_embed/2341"
		}
	]

	constructor() { }
}