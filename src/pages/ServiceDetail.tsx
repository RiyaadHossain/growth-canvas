import { useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { useServiceDetail } from "@/lib/servicesApi";
import NotFound from "./NotFound";

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { data, isLoading, error } = useServiceDetail(slug);

  if (isLoading) {
    return (
      <Layout>
        <section className="section-padding">
          <div className="container-wide text-center text-muted-foreground">
            Loading…
          </div>
        </section>
      </Layout>
    );
  }

  if (error || !data) {
    return <NotFound />;
  }

  return <ServicePageLayout data={data} />;
}
