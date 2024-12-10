import fs from 'fs';
import path from 'path';
import sizeOf from 'image-size';
import Image from 'next/image';

export default function Gallery() {
    // Get all image files from the folder
    const images = fs
        .readdirSync(path.join(process.cwd(), 'public/midjourney'))
        .filter((file) => /\.(png|jpe?g|gif)$/.test(file))
        .map((file) => {
            const dimensions = sizeOf(path.join(process.cwd(), 'public/midjourney', file));
            return { src: file, width: dimensions.width, height: dimensions.height };
        });

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-center mb-6">MidJourney Gallery</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((image, index) => (
                    <div key={index} className="relative">
                        <Image
                            src={`/midjourney/${image.src}`}
                            alt={`Image ${index + 1}`}
                            layout="responsive"
                            width={image.width}
                            height={image.height}
                            className="rounded-lg"
                        />
                        <p className="text-center mt-2 text-gray-600">{`Image ${index + 1}`}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
