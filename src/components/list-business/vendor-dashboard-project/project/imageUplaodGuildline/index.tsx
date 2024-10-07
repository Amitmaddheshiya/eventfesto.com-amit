import Image from "next/image";

const guidelines = [
  {
    src: "/img4.jpg",
    alt: "Horizontal Profile Picture",
    description: "Horizontal Profile Picture",
  },
  {
    src: "/imgcmp.jpg",
    alt: "Vertical Profile Picture",
    description: "Vertical Profile Picture",
  },
];

const ImageUploadGuideline = () => {
  return (
    <div className="mx-10 p-4">
      <h2 className="text-2xl font-bold mb-4">Photo Guidelines</h2>
      <p className="mb-6">
        As "pictures speak louder than words", we request you to please follow
        these guidelines when you are uploading images to your profile:
      </p>
      <div className="flex gap-8 mb-6 ml-2">
        {guidelines.map((guide) => (
          <div
            key={guide.description}
            className="w-96 px-2 border p-2 text-center"
          >
            <Image src={guide.src} alt={guide.alt} width={400} height={200} />
            <p className="mt-2 text-center py-2">{guide.description}</p>
          </div>
        ))}
      </div>
      <ul className="list-disc pl-5 mb-6">
        <li>
          Do not upload Vertical Images. All photos should be in a horizontal
          form.
        </li>
        <li>Do not upload selfies.</li>
        <li>Do not upload personal photos.</li>
        <li>Do not upload photos of your clients without their consent.</li>
      </ul>
      <h3 className="text-xl font-semibold mb-2">Do's</h3>
      <ul className="list-disc pl-5">
        <li>Only upload images that are related to your work/industry.</li>
      </ul>
    </div>
  );
};

export default ImageUploadGuideline;
