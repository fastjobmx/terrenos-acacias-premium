import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

// Obtener __dirname en ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuración
const VIDEOS_DIR = path.join(__dirname, '../public');
const THUMBNAILS_DIR = path.join(__dirname, '../public');

// Lista de videos para procesar
const videos = [
  'la-floresta.mp4',
  'bosques-alkali.mp4', 
  'reservas-eden.mp4',
  'versalles.mp4'
];

function generateThumbnail(videoPath, outputPath, timeOffset = '00:00:01') {
  try {
    const command = `ffmpeg -i "${videoPath}" -ss ${timeOffset} -vframes 1 -q:v 2 "${outputPath}" -y`;
    console.log(`Generando thumbnail para: ${path.basename(videoPath)}`);
    execSync(command, { stdio: 'inherit' });
    console.log(`✅ Thumbnail generado: ${path.basename(outputPath)}`);
  } catch (error) {
    console.error(`❌ Error generando thumbnail para ${videoPath}:`, error.message);
  }
}

function main() {
  console.log('🎬 Generando thumbnails para videos...\n');

  // Verificar si ffmpeg está instalado
  try {
    execSync('ffmpeg -version', { stdio: 'ignore' });
  } catch (error) {
    console.error('❌ ffmpeg no está instalado. Por favor instálalo primero:');
    console.error('   Windows: https://ffmpeg.org/download.html');
    console.error('   macOS: brew install ffmpeg');
    console.error('   Ubuntu: sudo apt install ffmpeg');
    process.exit(1);
  }

  // Crear directorio de thumbnails si no existe
  if (!fs.existsSync(THUMBNAILS_DIR)) {
    fs.mkdirSync(THUMBNAILS_DIR, { recursive: true });
  }

  // Procesar cada video
  videos.forEach(video => {
    const videoPath = path.join(VIDEOS_DIR, video);
    const thumbnailName = video.replace('.mp4', '-poster.jpg');
    const thumbnailPath = path.join(THUMBNAILS_DIR, thumbnailName);

    if (fs.existsSync(videoPath)) {
      generateThumbnail(videoPath, thumbnailPath);
    } else {
      console.log(`⚠️  Video no encontrado: ${video}`);
    }
  });

  console.log('\n✅ Proceso completado!');
  console.log('\n📝 Para usar los thumbnails generados:');
  console.log('1. Los thumbnails se guardaron en /public/');
  console.log('2. Ya están configurados en properties.ts');
  console.log('3. El componente LazyVideoPlayer los usará automáticamente');
}

main(); 