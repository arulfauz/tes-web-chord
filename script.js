const chords = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

function transpose(step) {
  const chordsElements = document.querySelectorAll('.chords'); // Ambil semua elemen dengan class 'chords'
  
  chordsElements.forEach(chordsElement => {
    const currentChords = chordsElement.innerText.split(/\s+/); // Memisahkan dengan satu atau lebih spasi
    const transposedChords = currentChords.map(chord => {
      const baseChord = chord.match(/[A-G#]+/);
      if (!baseChord) return chord; // Jika tidak ada chord yang ditemukan, kembalikan nilai aslinya
      const chordIndex = chords.indexOf(baseChord[0]);
      if (chordIndex === -1) return chord; // Jika chord tidak ditemukan, kembalikan aslinya
      const newIndex = (chordIndex + step + chords.length) % chords.length;
      return chord.replace(baseChord[0], chords[newIndex]);
    });
    chordsElement.innerText = transposedChords.join(' ');
  });
}
