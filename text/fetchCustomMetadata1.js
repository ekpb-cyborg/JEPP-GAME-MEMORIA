function fetchCustomMetadata1(index) {
    return new Promise((resolve) => {
        const metadata = {
            ARTIST: "EKPB Digital Music ©",
            TITLE: "Amor de Pai e filho grandes amigos",
            ALBUM: "Um Eco do Silêncio",
            COMMENT: "Canção que retrata a relação entre pai e filho durante um período de ausência devido a questões familiares pessoais. Melodia e letras que expressam saudade e a esperança pelo retorno breve.",
            TRACKNUMBER: "1",
            YEAR: "2025",
            GENRE: "Pop",
            TXXX: "Compositor"
        };

        const title = metadata.TITLE || `Faixa ${index + 1}`;
        const artist = metadata.ARTIST || 'Desconhecido';
        const album = metadata.ALBUM || 'Álbum desconhecido';
        const displayText = `Tocando: ${title} - ${artist} | Álbum: ${album}`;
        
        resolve(displayText);
    });
}
