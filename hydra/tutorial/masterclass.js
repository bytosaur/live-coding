// Workshop Zusammenfassung
// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// by Paul Bethge
// <3
// Dokumentation: https://hydra.ojack.xyz/api/


s0.initCam()          // schreibe die frames der Kamera in den Source Buffer s0

a.setSmooth(0.95)     // glätte die Werte des Mikrophons

a.show()              // zeige die Frequenzen an

render()              // zeige alle Output Buffer an

// Kamera Textur
src(s0)                         // verwende Source Buffer s0
.luma(0.2)                      // färbe alle Pixel unter einem gewissen Schwellwert Schwarz
.saturate([1, 5].ease())        // erhöhe die Saturation um verschiede Werte
.blend(src(o0), 0.9)            // blende das Ausgangsbild in das Eingangsbild zu 90%
.modulate(src(o0).brightness(-0.5), -0.02) // moduliere die Textur mit sich selbst
.out(o0)                        // schreibe die Textur in den Output Buffer o0

// Geometrische Textur
// die Anzahl an Kanten ist abhängig vom Klang und mindestens 0.5 * 3
// die Skalierung beträgt 0.2
// um schönere Kanten zu bekommen werden sie ein bisschen geglättet (0.00001)
shape(()=>( (a.fft[0] + 0.5) * 3), 0.2 , 0.00001)
   .scrollX( ()=>(Math.sin(time/10)/2) )  // verschiebe das Bild sinusförmig in X Richtung
   .scale( ()=>( (a.fft[0] + 0.5) ))      // skaliere abhängig von der tiefsten Frequenz aber mindestens um 0.5
   .colorama(()=>( (a.fft[0] + 0.5) ))    // verändere die Farbe abhängig vom Klang
.out(o1)                                  // schreibe die Textur in den Output Buffer o1

// Differenz der beiden Texturen
src(o0)           // verwende den Output Buffer o0
.diff(o1)         // ziehe davon o1 ab
.out(o2)          // schreibe die Textur in den Output Buffer o2

// Herzen von Naoto Hieda
shape(99)
.color(1, 0.2, 0.2) // Farbe
.scale(1,0.49)      // Begradigung
.scroll(.3, .3)     // Verschiebung ins Eck
.kaleid(4)          // Kaleidoskop
.rotate(0.2, 0.2)   // Rotation
.out(o3)
